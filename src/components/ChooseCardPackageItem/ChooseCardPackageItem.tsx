import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {chooseCardPackageItemStyle} from './chooseCardPackageItemStyle';
import {formatDateToMMD, isValidInput} from '../../helpers';
import {PackageCardModel} from '../../models/packages';
import {} from '../../helpers/isValidInput';

interface ChooseCardPackageItemProps {
  data: PackageCardModel;
  onAmountChange: (p: PackageCardModel, newAmount: number) => void;
}

export function ChooseCardPackageItem({
  data = {
    packageName: '',
    companyLogo: '',
    endDate: '',
    amount: 0,
    id: 0,
  },
  onAmountChange = () => {},
}: ChooseCardPackageItemProps) {
  const [amount, setAmount] = useState<string | undefined>('');
  const [focused, setFocused] = useState(false);

  const handleChange = (text: string) => {
    if (+text <= data.amount && isValidInput(text)) {
      onAmountChange(data, +text);
      setAmount(text);
    } else {
      setAmount(data.amount.toString());
      onAmountChange(data, data.amount);
    }
  };

  return (
    <View style={chooseCardPackageItemStyle.container}>
      <View>
        <Text
          style={[chooseCardPackageItemStyle.companyName, {marginBottom: 6}]}>
          {data?.packageName}
        </Text>
        <Text
          style={[chooseCardPackageItemStyle.titleText, {marginBottom: 12}]}>
          Expiration: {formatDateToMMD(data.endDate)}
        </Text>
      </View>
      <View>
        <View
          style={[
            chooseCardPackageItemStyle.balanceContainer,
            {marginBottom: 9},
          ]}>
          <Text style={chooseCardPackageItemStyle.titleText}>
            Available balance(AMD)
          </Text>
          <Text style={chooseCardPackageItemStyle.total}>{data?.amount}</Text>
        </View>
        <View style={chooseCardPackageItemStyle.balanceContainer}>
          <Text style={chooseCardPackageItemStyle.titleText}>Payment(AMD)</Text>
          <TextInput
            id={data.id}
            style={[
              chooseCardPackageItemStyle.inputGeneralStyle,
              {borderColor: focused ? '#3875F6' : '#DDE0E3'},
            ]}
            color={'#000000CC'}
            keyboardType={'numeric'}
            textContentType={'telephoneNumber'}
            value={amount}
            onChangeText={handleChange}
            cursorColor={'#3875F6'}
            maxLength={8}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </View>
      </View>
    </View>
  );
}
