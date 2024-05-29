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
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {handleChange} from '../../store';
import {useDispatch} from 'react-redux';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Alert, Linking } from 'react-native';
import { CameraDontAllowScreen } from '../CameraDontAllowScreen/CameraDontAllowScreen';

export function QRCodeScannerScreen() {
  const [openPackageListPopUp, setOpenPackageListPopUp] = useState(false);
  const [serviceId, setServiceId] = useState<number | string>(0);
  const [isAccessCamera, setIsAccessCamera] = useState(false);
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



  const requestCameraPermission = async () => {
    // Request camera permission
    const result = await request(PERMISSIONS.IOS.CAMERA);

    if (result === RESULTS.DENIED) {
        // Permission denied, guide the user to enable it in settings
        setIsAccessCamera(false);
    } else if (result === RESULTS.BLOCKED) {
        // Permission permanently denied (blocked)
        setIsAccessCamera(false);
    } else {
      setIsAccessCamera(true);
    }
  };

  useFocusEffect(() => {
    requestCameraPermission();
  })

  if(!isAccessCamera) {
    return <CameraDontAllowScreen />
  }


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
