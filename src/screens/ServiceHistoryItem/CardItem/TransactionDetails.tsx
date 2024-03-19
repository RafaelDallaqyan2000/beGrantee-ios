import {Text, View, Image} from 'react-native';
import {transactionHistoryItemStyle} from '../transactionHistoryItemStyle';
import {HOST} from '../../../services';
import {companiesScreenStyle} from '../../CompaniesScreen/companiesScreenStyle';
import React from 'react';

export interface TransactionType {
  card: {
    packageName?: string;
    amount?: string | number;
    logo?: string;
    companyLogo?: string;
    companyName?: string;
    id?: number | string;
  };
}
export function TransactionDetails({card}: TransactionType) {
  return (
    <View style={[transactionHistoryItemStyle.flex]}>
      <View style={transactionHistoryItemStyle.itemContainer}>
        {card?.companyLogo ? (
          <View style={transactionHistoryItemStyle.companyLogo}>
            <Image
              style={transactionHistoryItemStyle.companyImage}
              source={{uri: HOST + card?.companyLogo, width: 32, height: 32}}
            />
          </View>
        ) : (
          card?.companyName && (
            <View
              style={[
                companiesScreenStyle.companyLogo,
                {width: 32, height: 32, backgroundColor: '#7C819E'},
              ]}>
              <Text style={companiesScreenStyle.emptyLogo}>
                {card?.companyName[0]}
              </Text>
            </View>
          )
        )}
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              transactionHistoryItemStyle.status,
              transactionHistoryItemStyle.itemTitle,
              {color: '#7B7B7B'},
            ]}>
            {card?.companyName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              transactionHistoryItemStyle.title,
              transactionHistoryItemStyle.itemTitle,
            ]}>
            {card?.packageName}
          </Text>
        </View>
      </View>
      <Text style={[transactionHistoryItemStyle.title, {color: '#000000'}]}>
        {card?.amount}
      </Text>
    </View>
  );
}
