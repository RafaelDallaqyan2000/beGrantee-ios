import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ServiceModel} from '../../models/services';
import globalStyles from '../../styles/globalStyles';
import serviceCardStyle from './serviceCardStyle';
import {HOST} from '../../services';
import {httpsOrNo} from '../../helpers';

interface ServiceCardProps {
  data: ServiceModel;
  onPress: (service: ServiceModel) => void;
}

export function ServiceCard({data, onPress}: ServiceCardProps) {
  const handlePress = useCallback(() => {
    onPress(data);
  }, [data]);
  const {companyName} = data;


  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {httpsOrNo(data?.coverPhoto) ? (
        <Image
          source={{uri: HOST + data?.coverPhoto}}
          style={serviceCardStyle.backgroundImage}
        />
      ) : (
        <View style={serviceCardStyle.defaultBgImageContainer} />
      )}
      <View
        style={[globalStyles.flexRowBetween, {marginTop: 8, paddingBottom: 5}]}>
        <View style={serviceCardStyle.titleAndIcon}>
          {httpsOrNo(data?.companyLogo) ? (
            <Image
              source={{uri: HOST + data?.companyLogo}}
              style={serviceCardStyle.cardIcon}
            />
          ) : (
            <View style={serviceCardStyle.defaultIconContainer}>
              <Text style={serviceCardStyle.defaultIconText}>
                {data.companyName[0]}
              </Text>
            </View>
          )}
          <Text style={serviceCardStyle.title}>{companyName}</Text>
        </View>
        <Text style={serviceCardStyle.categoryIcon}>{data.productName}</Text>
      </View>

      {data?.subject && (
        <View style={{marginLeft: 4}}>
          <Text style={serviceCardStyle.topicText}>{data.subject}</Text>
        </View>
      )}

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    elevation: 5,
    padding: 4,
    borderRadius: 8,
    marginHorizontal: 30,
    marginTop: 8,
    backgroundColor: '#FFF',
  },
});
