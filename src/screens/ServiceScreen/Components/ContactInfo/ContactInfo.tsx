import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LocationIcon, PlanetIcon, TelephoneIcon} from '../../../../icons';

export function ContactInfo(data: any) {
  return (
    <View style={style.container}>
      {data?.data?.address && (
        <View style={style.childContainer}>
          <LocationIcon />
          <Text style={style.text}>{data.data.address}</Text>
        </View>
      )}

      {data?.data?.phone && (
        <View style={style.childContainer}>
          <TelephoneIcon />
          <Text style={style.text}>{data.data.phone}</Text>
        </View>
      )}

      {data?.data?.webUrl && (
        <View style={style.childContainer}>
          <PlanetIcon />
          <TouchableOpacity onPress={() => Linking.openURL(data?.data?.webUrl)}>
            <Text style={[style.text, style.link]}>{data?.data?.webUrl}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 4,
  },

  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
    width: '99%',
  },

  text: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#363431',
  },

  link: {
    color: '#3875F6',
    textDecorationLine: 'underline',
  },
});
