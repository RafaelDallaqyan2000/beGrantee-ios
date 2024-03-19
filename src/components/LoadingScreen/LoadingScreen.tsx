import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {chooseCardPopUpStyle} from '../ChooseCardPopup/chooseCardPopUpStyle';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import {loadingScreenStyle} from './loadingScreenStyle';
import {chooseCardPackageItemStyle} from '../ChooseCardPackageItem/chooseCardPackageItemStyle';
import AppButton from '../AppButton/AppButton';
import {useDispatch} from 'react-redux';
import {handleChange} from '../../store';
import {signal} from '../../SignalR/SignalR';
import {HubConnectionState} from '@microsoft/signalr';
import {cancelTransaction} from '../../services/getTransactionData';
import {PackageAmountModel} from '../../models/packages';
import {window } from "../../screens";

type LoadingScreenType = {
  title?: string;
  isLoading?: boolean;
  transactionIds?: never[];
  companyAmounts?: PackageAmountModel[];
  token: string;
};

export function LoadingScreen({
  token,
  title = 'Loading',
  transactionIds,
  companyAmounts,
}: LoadingScreenType) {
  const [openCancelledPopUp, setOpenCancelledPopUp] = useState(false);
  const [date] = useState(new Date().getTime());

  const dispatch: any = useDispatch();

  let s = 5 - Math.floor((new Date().getTime() - date) / 1000);
  const [update, setUpdate] = useState(false);
  const forceUpdate = () => setUpdate(prev => !prev);

  const handleCancelPress = () => {
    setOpenCancelledPopUp(true);
  };

  const handleSpendTimer = async () => {
    dispatch(handleChange('loadingSocket', false));
    dispatch(handleChange('openTransactionMessagePopUp', true));

    if (signal.state !== HubConnectionState.Connected) {
      await signal.start();
    }
    signal
      .invoke('AcceptServicePayment', {
        isAccept: true,
        servicePaymentData: {
          transactionIds,
          companyAmounts,
        },
      })
      .then(e => {
        console.log(e, 'TransactionCanceledByMobile success');
        return e;
      })
      .catch(err => {
        console.log(err, 'TransactionCanceledByMobile error');
        return err;
      });
  };

  function handleCanceledTransaction() {
    cancelTransaction(transactionIds, token);
    dispatch(handleChange('canceledTransaction', true));
    dispatch(handleChange('loadingSocket', false));
    dispatch(handleChange('openTransactionMessagePopUp', true));
    setOpenCancelledPopUp(false);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      s--;
      forceUpdate();
      if (s <= 0) {
        handleSpendTimer();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Modal visible={true} style={{height: window.height}}>
        <View style={loadingScreenStyle.container}>
          {openCancelledPopUp && <View style={loadingScreenStyle.bgColor} />}
          <View style={loadingScreenStyle.header}>
            <Text
              style={[
                chooseCardPopUpStyle.totalText,
                loadingScreenStyle.title,
              ]}>
              The payment is being processed
            </Text>
            <Text
              style={[
                chooseCardPackageItemStyle.total,
                loadingScreenStyle.subTitle,
              ]}>
              The process is currently underway. It will be automatically
              confirmed after {s} seconds.
            </Text>
          </View>

          <View style={loadingScreenStyle.loadingContainer}>
            <ActivityIndicator size={'large'} color="#3875F6" />
            <Text style={chooseCardPopUpStyle.loadingText}>{title}</Text>
          </View>
          <AppButton
            title="Cancel"
            textStyle={[chooseCardPopUpStyle.btnText, {color: '#FFF'}]}
            onPress={handleCancelPress}
            style={[
              globalStyles.button,
              {
                backgroundColor: '#3875F6',
                borderColor: '#3875F6',
              },
            ]}
          />
          {openCancelledPopUp && (
            <>
              <View style={loadingScreenStyle.popUp}>
                <Text style={loadingScreenStyle.cancelled}>Cancelled?</Text>
                <Text style={loadingScreenStyle.cancelledInfo}>
                  Are you sure want to cancel the request?
                </Text>
              </View>
              <View style={loadingScreenStyle.btnsContainer}>
                <AppButton
                  title="Yes"
                  textStyle={loadingScreenStyle.btnText}
                  onPress={handleCanceledTransaction}
                  style={[
                    loadingScreenStyle.btn,
                    {
                      backgroundColor: '#F05F57',
                      borderColor: '#F05F57',
                    },
                  ]}
                  secondViewStyle={{padding: 0, alignItems: 'center'}}
                />
                <AppButton
                  title="No"
                  textStyle={[loadingScreenStyle.btnText, {color: '#344054'}]}
                  onPress={() => setOpenCancelledPopUp(false)}
                  style={[loadingScreenStyle.btn, {}]}
                  secondViewStyle={{padding: 0}}
                />
              </View>
            </>
          )}
        </View>
      </Modal>
    </>
  );
}
