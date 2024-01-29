import React from 'react';
import {PackageModel} from '../../models/packages';
import {Image, Text, View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import packageCardStyle from './packageCardStyle';
import {formatDateToMMD} from '../../helpers';
import {HOST} from '../../services';

interface PackageCardProps {
  data: PackageModel;
  isEmpty?: boolean;
}

export function PackageCard({data, isEmpty = false}: PackageCardProps) {
  if (isEmpty) {
    return (
      <View style={[packageCardStyle.container, {backgroundColor: '#8EAEFD'}]}>
        <View style={[packageCardStyle.body, {justifyContent: 'center'}]}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={packageCardStyle.companyInfo}>
            No active benefits
          </Text>
        </View>
        <View
          style={[globalStyles.flexRowBetween, packageCardStyle.dateContainer]}>
          <Text style={packageCardStyle.amd}>AMD -</Text>
          <Text style={[packageCardStyle.date, {textAlign: 'right'}]}>
            Expiration: --/--
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={packageCardStyle.container}>
      <View style={packageCardStyle.body}>
        {data.companyLogo ? (
          <Image
            source={{uri: HOST + data.companyLogo}}
            style={[packageCardStyle.companyLogo, {borderWidth: 1}]}
          />
        ) : (
          <View style={packageCardStyle.companyLogo}>
            <Text style={packageCardStyle.defaultCompanyLogo}>
              {data.companyName && data.companyName[0]}
            </Text>
          </View>
        )}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={packageCardStyle.companyInfo}>
          {data.packageName}
        </Text>
      </View>
      <View
        style={[globalStyles.flexRowBetween, packageCardStyle.dateContainer]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={packageCardStyle.amd}>
          AMD {data.amount}
        </Text>
        <Text style={packageCardStyle.date}>
          {data.endDate ? `Expiration: ${formatDateToMMD(data.endDate)}` : null}
        </Text>
      </View>
    </View>
  );
}
