import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  UserProfileScreen,
  CompaniesScreen,
  PackagesScreen,
  PrivacyPolicyScreen,
  window,
} from '../screens';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {LiveChat} from '../components';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

export function ProfileStack() {
  const {navigate} = useNavigation();
  const navigateToPreviousScreen = () => navigate('Profile' as never);
  const {t} = useTranslation();

  const BackComponent = () => (
    <TouchableOpacity
      style={{paddingLeft: 10, paddingTop: 15}}
      onPress={navigateToPreviousScreen}>
      <BackIcon style={{padding: 15}} />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {elevation: 0},
          headerShown: false,
          headerTitleStyle: style.titleStyle,
        }}
        name="Profile"
        component={UserProfileScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 3, left: 20},
          headerTitle: t('Companies'),
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {
            width: '100%',
            bottom: 5,
            left: window.width / 2 - 150,
            justifyContent: 'flex-end',
          },
          headerTitleStyle: style.titleStyle,
        }}
        name="Companies"
        component={CompaniesScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 3, left: 20},
          headerTitle: t('Packages'),
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {
            width: '100%',
            left: window.width / 2 - 150,
            bottom: -2,
          },
          headerTitleStyle: style.titleStyle,
        }}
        name="Packages"
        component={PackagesScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {
            position: 'absolute',
            bottom: 3,
            left: 20,
          },
          headerTitle: t('Privacy Policy'),
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {
            width: '100%',
            paddingLeft: 30,
            bottom: -2,
            left: window.width / 2 - 150
          },
          headerTitleStyle: style.titleStyle,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 3, left: 20},
          headerTitle: t('Live Chat'),
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {
            width: '100%',
            left: window.width / 2 - 150,
            bottom: -2,
          },
          headerTitleStyle: style.titleStyle,
        }}
        name="LiveChat"
        component={LiveChat}
      />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  titleStyle: {
    color: '#333333',
    fontFamily: 'NotoSansArmneian-SemiBold',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
  },
});
