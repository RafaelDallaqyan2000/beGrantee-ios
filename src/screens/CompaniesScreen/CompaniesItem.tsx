import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {companiesScreenStyle} from './companiesScreenStyle';
import {HOST} from '../../services';
import {LocationIcon, PlanetIcon, TelephoneIcon} from '../../icons';
import React from 'react';

type CompanyType = {
  company: {
    companyName?: string;
    logoPath?: string | null;
    phone?: string | null;
    webSiteUrl?: string | null;
    address?: string | null;
  };
};

export function CompaniesItem({company}: CompanyType) {
  const {
    companyName = '',
    logoPath = '',
    webSiteUrl = '',
    address = '',
    phone = '',
  } = company;

  return (
    <View style={companiesScreenStyle.companyContainer}>
      <View style={style.companyNameAndLogo}>
        {logoPath ? (
          <View style={companiesScreenStyle.companyLogo}>
            <Image source={{uri: HOST + logoPath, width: 34, height: 34}} />
          </View>
        ) : (
          <View
            style={[
              companiesScreenStyle.companyLogo,
              {backgroundColor: '#7C819E'},
            ]}>
            <Text style={companiesScreenStyle.emptyLogo}>{companyName && companyName[0]}</Text>
          </View>
        )}
        <Text style={companiesScreenStyle.companyName}>{companyName}</Text>
      </View>

      {address && (
        <View style={companiesScreenStyle.infoContainer}>
          <View style={companiesScreenStyle.infoIcon}>
            <LocationIcon />
          </View>
          <Text style={style.text}>{address}</Text>
        </View>
      )}

      {phone && (
        <View style={companiesScreenStyle.infoContainer}>
          <View style={companiesScreenStyle.infoIcon}>
            <TelephoneIcon />
          </View>
          <Text style={style.text}>{phone}</Text>
        </View>
      )}

      {webSiteUrl && (
        <View style={companiesScreenStyle.infoContainer}>
          <View style={companiesScreenStyle.infoIcon}>
            <PlanetIcon />
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(webSiteUrl)}>
            <Text
              style={[
                style.text,
                {color: '#3875F6', textDecorationLine: 'underline'},
              ]}>
              {webSiteUrl}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  companyNameAndLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  container: {
    marginTop: 4,
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
  },
  text: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#363431',
  },
});
