import React, {useContext, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {BarCodeReadEvent} from 'react-native-camera';
import {
  ChooseCardPopup,
  CustomMarker,
  // TransactionSocketProvider,
} from '../../components';
import {getPackagesByServiceId} from '../../services';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {qrScannerScreenStyle} from './qrScannerScreen';
import {AuthContext} from '../../../App';
// import {signal} from '../../SignalR/SignalR';
import {useNavigation} from '@react-navigation/native';
import {handleChange} from '../../store';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';

export function QRCodeScannerScreen() {
  const [openPackageListPopUp, setOpenPackageListPopUp] = useState(false);
  const [serviceId, setServiceId] = useState<number | string>(0);
  const dispatch: any = useDispatch();
  const navigation = useNavigation();

  const {token} = useContext(AuthContext);

  const {data: packages, isLoading: loadingPackages} = useQuery({
    enabled: serviceId !== 0,
    queryKey: [QueryRoute.services, serviceId, openPackageListPopUp],
    queryFn: () => getPackagesByServiceId(token, serviceId),
  });

  const onQRSuccess = (e: BarCodeReadEvent) => {
    setOpenPackageListPopUp(true);
    dispatch(handleChange('canceledTransaction', false));
    setServiceId(e?.data);
  };

  const closeCardPopup = () => {
    setOpenPackageListPopUp(false);
    navigation.navigate('Main' as never);
    // signal.off('AcceptServicePayment');
  };

  return (
    <>
      {/* <TransactionSocketProvider> */}
      {/*  <ChooseCardPopup*/}
      {/*    isOpen={openPackageListPopUp}*/}
      {/*    onClose={closeCardPopup}*/}
      {/*    data={packages?.data}*/}
      {/*    qrCode={serviceId}*/}
      {/*  />*/}
      {/*</TransactionSocketProvider>*/}
      {!openPackageListPopUp && (
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
      )}
    </>
  );
}
