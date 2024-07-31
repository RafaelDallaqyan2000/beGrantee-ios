import {Text, View} from 'react-native';
import {SuccessIcon} from '../../icons/SuccessIcon';
import {successOrErrorPupUpStyle} from './successOrErrorPupUpStyle';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import CanceledIcon from '../../icons/QRcodeScreen/CanceledIcon';
import {ErrorIcon} from '../../icons/ErrorIcon';
import { useTranslation } from 'react-i18next';

type MessageType = {
  onContinue: () => void;
  onTryAgain: () => void;
  success: boolean;
};

export function SuccessOrErrorPopUp({
  onContinue = () => {},
  onTryAgain = () => {},
  success = false,
}: MessageType) {
  const cancelled = useSelector(
    (store: any) => store.reducer?.canceledTransaction,
  );
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      if (success) {
        onContinue();
      } else {
        onTryAgain();
      }
    }, 3000);
  }, []);

  const popUpData: any = {
    success: {
      title: t('Payment Accepted'),
      info: t('Your transaction has accepted been completed. For more details, check your transaction history.'),
      icon: <SuccessIcon />,
    },
    rejected: {
      title: t('Payment Rejected'),
      info: t('Your transaction was rejected. For more details, check your transaction history.'),
      icon: <ErrorIcon />,
    },
    cancelled: {
      title: t('Payment Cancelled'),
      info: t('Your transaction was cancelled. For more details, check your transaction history.'),
      icon: <CanceledIcon />,
    },
  };

  const transactionDataToString = cancelled
    ? 'cancelled'
    : success
    ? 'success'
    : 'rejected';

  return (
    <>
      <View style={successOrErrorPupUpStyle.bgContainer} />
      <View style={successOrErrorPupUpStyle.container}>
        <View style={{alignItems: 'center'}}>
          {popUpData[transactionDataToString].icon}
          <Text style={successOrErrorPupUpStyle.message}>
            {popUpData[transactionDataToString].title}
          </Text>
          <Text style={successOrErrorPupUpStyle.info}>
            {popUpData[transactionDataToString].info}
          </Text>
        </View>
      </View>
    </>
  );
}
