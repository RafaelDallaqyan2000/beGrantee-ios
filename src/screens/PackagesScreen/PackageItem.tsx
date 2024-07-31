import {Image, Text, View} from 'react-native';
import {transactionHistoryItemStyle} from '../ServiceHistoryItem/transactionHistoryItemStyle';
import {profileSettingsStyle} from '../UserProfileScreen/Components/ProfileSettings.tsx/profileSettingsStyle';
import {companiesScreenStyle} from '../CompaniesScreen/companiesScreenStyle';
import {packageScreenStyle} from './packageScreenStyle';
import React from 'react';
import {HOST} from '../../services';
import {formatDateForPackage} from '../../helpers';
import { useTranslation } from 'react-i18next';

type PackageItemType = {
  data: {
    companyName: string;
    packageName: string;
    logoPath: string;
    startDate: string;
    endDate: string;
    status: string;
    repetition: string;
    budgetPerUser: string;
  };
};

const statusColor = {
  Active: '#7ACD91',
  Canceled: '#FFC37E',
  Completed: '#8EAEFD',
};
export function PackageItem({data}: PackageItemType) {
  // @ts-ignore
  const {
    companyName,
    packageName,
    logoPath,
    startDate,
    endDate,
    status,
    repetition,
    budgetPerUser,
  } = data;

  const {t} = useTranslation();

  return (
    <View style={profileSettingsStyle.packageContainer}>
      <View style={profileSettingsStyle.packageHeader}>
        {logoPath ? (
          <View style={companiesScreenStyle.companyLogo}>
            <Image source={{uri: HOST + logoPath, width: 38, height: 38}} />
          </View>
        ) : (
          <View
            style={[
              companiesScreenStyle.companyLogo,
              {backgroundColor: '#7C819E'},
            ]}>
            <Text style={companiesScreenStyle.emptyLogo}>{companyName[0]}</Text>
          </View>
        )}

        <View>
          <Text style={packageScreenStyle.companyName}>{companyName}</Text>
          <Text style={packageScreenStyle.benefitName}>{packageName}</Text>
        </View>
      </View>

      <View style={[transactionHistoryItemStyle.flex, {marginBottom: 8}]}>
        <Text style={transactionHistoryItemStyle.title}>{t('Date')}</Text>
        <Text style={transactionHistoryItemStyle.value}>
          {`${formatDateForPackage(startDate)} | ${formatDateForPackage(
            endDate,
          )}`}
        </Text>
      </View>

      <View style={[transactionHistoryItemStyle.flex, {marginBottom: 8}]}>
        <Text style={transactionHistoryItemStyle.title}>{t('Status')}</Text>
        <Text
          style={[
            transactionHistoryItemStyle.value,
            {color: statusColor[status]},
          ]}>
          {status}
        </Text>
      </View>

      <View style={[transactionHistoryItemStyle.flex, {marginBottom: 8}]}>
        <Text style={transactionHistoryItemStyle.title}>{t('Repetition')}</Text>
        <Text style={transactionHistoryItemStyle.value}>{repetition}</Text>
      </View>

      <View style={profileSettingsStyle.line} />

      <View style={[transactionHistoryItemStyle.flex, {marginBottom: 8}]}>
        <Text style={transactionHistoryItemStyle.itemTotalAmount}>
          {t('Amount per usage')}
        </Text>
        <Text style={profileSettingsStyle.amount}>{budgetPerUser}</Text>
      </View>
    </View>
  );
}
