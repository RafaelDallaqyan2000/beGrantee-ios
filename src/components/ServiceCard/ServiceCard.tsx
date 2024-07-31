import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  const {companyName} = data;
  const [loadImage, setLoadImage] = useState(false);

  const handlePress = useCallback(() => {
    onPress(data);
  }, [data]);


  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {
        
      }
      {httpsOrNo(data?.coverPhoto) ? (
        <>
        <View style={serviceCardStyle.backgroundImageContainer}>
          {loadImage && <ActivityIndicator size="large" color="#888888" style={serviceCardStyle.backgroundImage}/> }
          <Image
            source={{uri: HOST + data?.coverPhoto}}
            style={[serviceCardStyle.backgroundImage]}
            onLoadStart={() => setLoadImage(true)}
            onLoadEnd={() => setLoadImage(false)}
          />
        </View>
        </>
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

      {data?.subject ? (
        <View style={{marginLeft: 4}}>
          <Text style={serviceCardStyle.topicText}>{data.subject}</Text>
        </View>
      ) : (
        <View style={serviceCardStyle.defaultPreviewStyle} />
      )
    }
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
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
