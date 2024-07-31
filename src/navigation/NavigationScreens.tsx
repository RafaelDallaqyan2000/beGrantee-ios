import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  ChooseLanguageScreen,
  PhoneNumberScreen,
  PrivacyPolicyWithHeader,
  TermsAndConditionsScreen,
  VerificationScreen,
} from '../screens';
import {AuthContext} from '../../App';
import {TabScreens} from './TabScreens.tsx';

export interface VerificationScreenParams {
  phoneNumber: string;
  phoneCodeId: number;
  getResendCode: any;
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
  ChooseLanguage: never;
};

const Stack = createStackNavigator<StackNavigatorParamList>();
export const navigationRef = React.createRef<NavigationContainerRef>();

export function NavigationScreens() {
  const {token} = useContext(AuthContext);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {!token ? (
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen name="ChooseLanguage" component={ChooseLanguageScreen} />
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