import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  PhoneNumberScreen,
  PrivacyPolicyWithHeader,
  TermsAndConditionsScreen,
  VerificationScreen,
} from '../screens';
import {AuthContext} from '../../App';
// import {ServiceModel} from '../models/services';
// import {LoadingScreen} from '../components/LoadingScreen/LoadingScreen';
// import {ChooseCardPopup} from '../components';
import {StyleSheet} from 'react-native';
import {TabScreens} from './TabScreens.tsx';

export interface VerificationScreenParams {
  phoneNumber: string;
  phoneCodeId: number;
}
// export interface ServiceScreenParams {
//   service: ServiceModel;
// }

export type StackNavigatorParamList = {
  Home: never;
  PhoneNumber: never;
  Verification: VerificationScreenParams;
  Main: never;
  // Service: ServiceScreenParams;
  PrivacyPolicy: never;
  Loading: never;
  ChooseCard: never;
  TeamsAndConditions: never;
  PrivacyPolicyWithHeader: never;
  TermsAndConditions: never;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

export function NavigationScreens() {
  const {token} = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!token ? (
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />

              <Stack.Screen
                name="Verification"
                component={VerificationScreen}
              />

              <Stack.Screen
                name="PrivacyPolicyWithHeader"
                component={PrivacyPolicyWithHeader}
              />

              <Stack.Screen
                name="TermsAndConditions"
                component={TermsAndConditionsScreen}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="Home"
                component={TabScreens}
                options={{
                  headerShown: false,
                  cardStyle: {backgroundColor: '#FFFFFF'},
                }}
              />
              {/*<Stack.Screen*/}
              {/*  name="Loading"*/}
              {/*  component={LoadingScreen}*/}
              {/*  options={{*/}
              {/*    headerShown: false,*/}
              {/*    cardStyle: {backgroundColor: '#FFFFFF'},*/}
              {/*  }}*/}
              {/*/>*/}
              {/*<Stack.Screen*/}
              {/*  name="ChooseCard"*/}
              {/*  component={ChooseCardPopup}*/}
              {/*  options={{*/}
              {/*    headerShown: false,*/}
              {/*    cardStyle: {backgroundColor: '#FFFFFF'},*/}
              {/*  }}*/}
              {/*/>*/}
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
