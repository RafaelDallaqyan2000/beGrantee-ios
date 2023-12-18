import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {CheckBox} from '../index';
import {useNavigation} from '@react-navigation/native';

interface TmsAndCdsAndPPType {
  checked: boolean;
  setChecked: any;
}
export function PrivacyPolicyAndTerms({
  checked,
  setChecked,
}: TmsAndCdsAndPPType) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CheckBox checked={checked} handleChecked={setChecked} />
      <Text style={styles.text}>
        I have read and agree with{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('TermsAndConditions' as never)}>
          Terms and conditions
        </Text>{' '}
        and{' '}
        <Text
          style={styles.link}
          onPress={() =>
            navigation.navigate('PrivacyPolicyWithHeader' as never)
          }>
          Privacy policy
        </Text>
      </Text>
    </View>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
  },

  text: {
    color: '#000000',
    maxWidth: window.width - 100,
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },

  link: {
    color: '#3875F6',
    textDecorationLine: 'underline',
  },
});
