import React, {useContext, useMemo, useState} from 'react';
import {
  PackageAmountModel,
  PackageCardModel,
  PackageModel,
} from '../../models/packages';
import {Modal, ScrollView, Text, View} from 'react-native';
import {chooseCardPopUpStyle} from './chooseCardPopUpStyle';
import {ChooseCardPackageItem} from '../ChooseCardPackageItem';
import AppButton from '../AppButton/AppButton';
// import {SuccessOrErrorPopUp} from '../SuccessOrErrorPopUp/SuccessOrErrorPopUp';
import {useNavigation} from '@react-navigation/native';
// import {LoadingScreen} from '../LoadingScreen/LoadingScreen';
import BackIcon from '../../icons/BackIcon';
import globalStyles from '../../styles/globalStyles';
import {connect} from 'react-redux';
import {handleChange} from '../../store';
// import EmptyPackageImage from '../../images/EmptyPackageImage';
import {successOrErrorPupUpStyle} from '../SuccessOrErrorPopUp/successOrErrorPupUpStyle';
import {getTransactionData} from '../../services';
import {AuthContext} from '../../../App';

interface ChooseCardPopupProps {
  data?: PackageModel[];
  isOpen: boolean;
  onClose: () => void;
  qrCode: number | string;
  loadingSocket: boolean;
  handleChange: any;
  openTransactionMessagePopUp?: boolean;
}

function ChooseCardPopupContainer({
  data = [],
  isOpen,
  onClose = () => {},
  qrCode,
  loadingSocket,
  handleChange,
  openTransactionMessagePopUp,
}: ChooseCardPopupProps) {
  let {token}: any = useContext(AuthContext);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [transactionIds, setTransactionIds] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState(
    new Map<number, PackageAmountModel>(),
  );
  const [success] = useState(true);
  const navigation = useNavigation();
  const total = useMemo(
    () =>
      Array.from(selectedPackages.values()).reduce(
        (prev, next) => prev + next.amount,
        0,
      ),
    [selectedPackages, openPopUp, openTransactionMessagePopUp],
  );

  const handleSubmit = async () => {
    if (total > 0) {
      getTransactionData(
        {
          date: new Date(),
          phone: data[0].phoneNumber,
          serviceId: +qrCode,
          total,
          connectionId: 'idk',
          companyAmounts: Array.from(selectedPackages.values()),
        },
        token,
      ).then(data => {
        setTransactionIds(data.transactionIds);
        handleChange('loadingSocket', true);
      });
    }
  };

  const handleAmountChange = (p: PackageCardModel, newAmount: number) => {
    setSelectedPackages(prev => {
      const selectedPackage = {
        companyName: p.companyName,
        cardId: p.id,
        amount: newAmount,
      } as PackageAmountModel;
      prev.set(p.id, selectedPackage);
      return new Map<number, PackageAmountModel>([...prev]);
    });
  };

  const handleContinue = () => {
    setOpenPopUp(false);
    handleChange('openTransactionMessagePopUp', false);

    setSelectedPackages(new Map<number, PackageAmountModel>());
    navigation.reset({routes: [{name: 'Main'}]});

    onClose();
  };
  const handleTryAgain = () => {
    setSelectedPackages(new Map<number, PackageAmountModel>());
    setOpenPopUp(false);
    handleChange('openTransactionMessagePopUp', false);
  };

  // if (loadingSocket) {
  //   return (
  //     <LoadingScreen
  //       token={token}
  //       transactionIds={transactionIds}
  //       companyAmounts={Array.from(selectedPackages.values())}
  //       isLoading={true}
  //     />
  //   );
  // }

  if (data?.length <= 0 && isOpen) {
    return (
      <View style={chooseCardPopUpStyle.emptyPackageContainer}>
        <View style={chooseCardPopUpStyle.header}>
          <View style={chooseCardPopUpStyle.closeBtn}>
            <BackIcon onPress={onClose} />
          </View>
          <Text style={chooseCardPopUpStyle.title}>No such benefit</Text>
        </View>
        <View style={chooseCardPopUpStyle.emptyPackageImage}>
          {/*<EmptyPackageImage />*/}
          <Text style={successOrErrorPupUpStyle.message}>
            QR is not available
          </Text>
          <Text style={successOrErrorPupUpStyle.info}>
            You have no active benefit package that includes this service.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <Modal style={{position: 'relative'}} visible={isOpen}>
      {/*{isOpen ? (*/}
      {/*  <SuccessOrErrorPopUp*/}
      {/*    success={success}*/}
      {/*    isOpen={!!openTransactionMessagePopUp}*/}
      {/*    onContinue={handleContinue}*/}
      {/*    onTryAgain={handleTryAgain}*/}
      {/*  />*/}
      {/*) : null}*/}

      <View style={chooseCardPopUpStyle.container}>
        <View style={chooseCardPopUpStyle.header}>
          <View style={chooseCardPopUpStyle.closeBtn}>
            <BackIcon onPress={onClose} />
          </View>

          <Text style={chooseCardPopUpStyle.title}>Choose package</Text>
        </View>

        <Text style={chooseCardPopUpStyle.topic}>Payment</Text>

        <ScrollView style={{marginTop: 16, marginBottom: 8}}>
          {data?.map(pkg => (
            <View key={pkg?.id}>
              <ChooseCardPackageItem
                data={pkg}
                key={pkg?.id}
                onAmountChange={handleAmountChange}
              />
            </View>
          ))}
        </ScrollView>

        <View
          style={[
            chooseCardPopUpStyle.footerContainer,
            {width: '100%', marginBottom: 4},
          ]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={chooseCardPopUpStyle.totalText}>Total</Text>
            <Text style={chooseCardPopUpStyle.totalText}>{total} AMD</Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 42}}>
            <AppButton
              disabled={total === 0}
              title="Checkout"
              textStyle={[
                chooseCardPopUpStyle.btnText,
                {color: total > 0 ? '#FFF' : '#7B7B7B'},
              ]}
              onPress={handleSubmit}
              style={[
                globalStyles.button,
                {
                  backgroundColor: total > 0 ? '#3875F6' : '#F5F5F5',
                  borderColor: total > 0 ? '#3875F6' : '#D0D5DD',
                },
              ]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loadingSocket: state.reducer?.loadingSocket ?? false,
    openTransactionMessagePopUp:
      state.reducer?.openTransactionMessagePopUp ?? false,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (key: string, value: any) =>
      dispatch(handleChange(key, value)),
  };
};

export const ChooseCardPopup = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseCardPopupContainer);
