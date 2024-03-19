import React, {useContext, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {BarCodeReadEvent} from 'react-native-camera';
import {
  ChooseCardPopup,
  CustomMarker,
  TransactionSocketProvider,
} from '../../components';
import {getPackagesByServiceId} from '../../services';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {qrScannerScreenStyle} from './qrScannerScreen';
import {AuthContext} from '../../../App';
import {signal} from '../../SignalR/SignalR';
import {useNavigation} from '@react-navigation/native';
import {handleChange} from '../../store';
import {useDispatch} from 'react-redux';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {chooseCardPopUpStyle} from '../../components/ChooseCardPopup/chooseCardPopUpStyle';

export function QRCodeScannerScreen() {
  const [openPackageListPopUp, setOpenPackageListPopUp] = useState(false);
  const [serviceId, setServiceId] = useState<number | string>(0);
  const [isLoadingTransactionData, setIsLoadingTransactionData] =
    useState(false);
  const dispatch: any = useDispatch();
  const navigation = useNavigation();

  const {token} = useContext(AuthContext);

  const {data: packages} = useQuery({
    enabled: serviceId !== 0,
    queryKey: [QueryRoute.services, serviceId, openPackageListPopUp],
    queryFn: () => getPackagesByServiceId(token, serviceId),
    onSuccess: () => setIsLoadingTransactionData(false),
    onError: () => setIsLoadingTransactionData(false),
  });

  const onQRSuccess = (e: BarCodeReadEvent) => {
    setOpenPackageListPopUp(true);
    dispatch(handleChange('canceledTransaction', false));
    setServiceId(e?.data);
    setIsLoadingTransactionData(true);
  };

  const closeCardPopup = () => {
    setOpenPackageListPopUp(false);
    navigation.navigate('Main' as never);
    signal.off('AcceptServicePayment');
  };

  return openPackageListPopUp ? (
    <TransactionSocketProvider>
      <ChooseCardPopup
        isOpen={openPackageListPopUp}
        onClose={closeCardPopup}
        data={packages?.data}
        qrCode={serviceId}
        isLoadingData={isLoadingTransactionData}
      />
    </TransactionSocketProvider>
  ) : (
    <QRCodeScanner
      cameraType={'back'}
      reactivate={!openPackageListPopUp}
      reactivateTimeout={2000}
      onRead={onQRSuccess}
      showMarker={true}
      customMarker={<CustomMarker />}
      cameraStyle={qrScannerScreenStyle.scanContainer}
      containerStyle={{backgroundColor: '#fff'}}
    />
  );
}
