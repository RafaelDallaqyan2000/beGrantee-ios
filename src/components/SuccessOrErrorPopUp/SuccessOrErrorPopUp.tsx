import {Text, View} from 'react-native';
// import {SuccessIcon} from '../../icons/SuccessIcon';
import {successOrErrorPupUpStyle} from './successOrErrorPupUpStyle';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
// import CanceledIcon from '../../icons/QRcodeScreen/CanceledIcon';
// import {ErrorIcon} from '../../icons/ErrorIcon';

const popUpData = {
  success: {
    title: 'Payment Accepted',
    info: 'Your transaction has accepted been completed. For more details, check your transaction history.',
    // icon: <SuccessIcon />,
  },
  rejected: {
    title: 'Payment Rejected',
    info: 'Your transaction was rejected. For more details, check your transaction history.',
    // icon: <ErrorIcon />,
  },
  cancelled: {
    title: 'Payment Cancelled',
    info: 'Your transaction was cancelled. For more details, check your transaction history.',
    // icon: <CanceledIcon />,
  },
};

type MessageType = {
  isOpen: boolean;
  onContinue: () => void;
  onTryAgain: () => void;
  success: boolean;
};

export function SuccessOrErrorPopUp({
  isOpen = false,
  onContinue = () => {},
  onTryAgain = () => {},
  success = false,
}: MessageType) {
  if (!isOpen) {
    return;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cancelled = useSelector(
    (store: any) => store.reducer?.canceledTransaction,
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      if (success) {
        onContinue();
      } else {
        onTryAgain();
      }
    }, 3000);
  }, []);

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
          {/*{popUpData[transactionDataToString].icon}*/}
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
