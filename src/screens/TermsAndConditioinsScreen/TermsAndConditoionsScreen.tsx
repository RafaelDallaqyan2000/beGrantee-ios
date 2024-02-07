import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackIcon from '../../icons/BackIcon.tsx';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ConvertHtmlCode} from '../../components';
import {fixedData} from '../../data.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

export function TermsAndConditionsScreen() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{position: 'relative', backgroundColor: '#FFF'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('PhoneNumber' as never)}>
            <BackIcon style={{padding: 15}} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Terms and Conditions</Text>
        </View>
        <ScrollView style={{backgroundColor: '#FFF', padding: 30}}>
          <ConvertHtmlCode data={fixedData.termsAndConditions} mb={150} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#262626',
    fontFamily: 'NotoSansArmenian-Medium',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },

  backIcon: {
    position: 'absolute',
    left: 30,
    top: 10,
  },
});
