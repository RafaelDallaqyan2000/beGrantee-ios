import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  UserProfileScreen,
  PrivacyPolicyScreen,
  LanguageScreen,
} from '../screens';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CompaniesScreen} from '../screens/CompaniesScreen/CompaniesScreen';
import {PackagesScreen} from '../screens/PackagesScreen/PackagesScreen';
import BackIcon from '../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

export function ProfileStack() {
  const {navigate} = useNavigation();
  const navigateToPreviousScreen = () => navigate('Profile' as never);

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
          headerLeftContainerStyle: {position: 'absolute', bottom: 0, left: 20},
          headerStatusBarHeight: 5,
          headerTitle: 'Companies',
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {width: '100%', paddingLeft: 30},
          headerTitleStyle: style.titleStyle,
        }}
        name="Companies"
        component={CompaniesScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 0, left: 20},
          headerStatusBarHeight: 5,
          headerTitle: 'Packages',
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {width: '100%', paddingLeft: 30},
          headerTitleStyle: style.titleStyle,
        }}
        name="Packages"
        component={PackagesScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 0, left: 20},
          headerStatusBarHeight: 5,
          headerTitle: 'Language',
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {width: '100%', paddingLeft: 30},
          headerTitleStyle: style.titleStyle,
        }}
        name="Language"
        component={LanguageScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: BackComponent,
          headerLeftContainerStyle: {position: 'absolute', bottom: 0, left: 20},
          headerStatusBarHeight: 5,
          headerTitle: 'Privacy Policy',
          headerStyle: {elevation: 0},
          headerTitleContainerStyle: {width: '100%', paddingLeft: 30},
          headerTitleStyle: style.titleStyle,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
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
    lineHeight: 32,
    paddingTop: 15,
    textAlign: 'center',
  },
});
