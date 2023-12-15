import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalStyles';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {CountryCode} from '../../models/common';
// import {useMutation, useQuery} from '@tanstack/react-query';
// import {QueryRoute} from '../../react-query/query-routes';
// import {getCountryCodes, loginByPhone} from '../../services/authService';
// import SvgPersonInLogin from '../../images/SvgSignInImage';
import phoneNumberStyles from './phoneNumberStyles';
// import AppButton from '../../components/AppButton/AppButton';
import {TextInput} from '@react-native-material/core';
// import SelectIcon from '../../icons/LogInScreen/SelectIcon';
import LogoAnimation from './AnimationLogoScreen/AnimationLogo';
// import WrongIcon from '../../icons/WrongIcon';
// import {PrivacyPolicyAndTerms} from '../../components/PrivacyPolicyAndTerms/PrivacyPolicyAndTerms';

export const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [countryCode, setCountryCode] = useState<CountryCode>();
  const [error, setError] = useState<string>();
  const [showAnimation, setShowAnimation] = useState(true);
  const [showImage, setShowImage] = useState(true);
  // const [checkedPrivacyPolicy, setCheckedPrivacyPolicy] = useState(false);
  // const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 6000);
  }, []);

  // const countryCodeQuery = useQuery({
  //   queryKey: [QueryRoute.countryCodes],
  //   queryFn: getCountryCodes,
  //   onSuccess(data) {
  //     if (data.length) {
  //       setCountryCode(data[0]);
  //     }
  //   },
  //   initialData: [],
  // });
  //
  // const signInQuery = useMutation({
  //   mutationFn: loginByPhone,
  //   onError: () => {
  //     setError('failed to login');
  //   },
  //   onSuccess: (data, loginParams) => {
  //     if (data.success) {
  //       setError('');
  //       navigation.navigate(
  //         'Verification' as never,
  //         {
  //           phoneNumber: loginParams.phoneNumber,
  //           phoneCodeId: loginParams.phoneCodeId,
  //           getResendCode: signInQuery,
  //         } as never,
  //       );
  //     } else {
  //       setError(data.message);
  //     }
  //   },
  // });

  const handlePhoneNumberChange = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber);
    setError('');
  };

  // const handleSubmitBtn = () => {
  //   if (phoneNumber.length >= 8 && checkedPrivacyPolicy) {
  //     signInQuery.mutate({
  //       phoneCodeId: countryCode?.id ?? 1,
  //       phoneNumber: phoneNumber,
  //     });
  //   }
  // };

  if (showAnimation) {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => setShowAnimation(false)}>
        <LogoAnimation />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView style={globalStyles.container}>
      <View
        style={[
          globalStyles.screenContainer,
          {justifyContent: 'space-evenly'},
        ]}>
        <View style={phoneNumberStyles.header}>
          <Text style={globalStyles.screenTitle}>BeGrantee</Text>
          <Text style={globalStyles.text}>Benefits App</Text>
          <Text style={phoneNumberStyles.topic}>Login to your account</Text>
        </View>

        {showImage && (
          <View style={phoneNumberStyles.body}>
            {/*<SvgPersonInLogin />*/}
          </View>
        )}

        <KeyboardAvoidingView
          style={{backgroundColor: '#FFFFFF'}}
          contentContainerStyle={{backgroundColor: '#FFFFFF'}}
          behavior={'padding'}
          keyboardVerticalOffset={30}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={phoneNumberStyles.footer}>
              <View>
                <Text style={phoneNumberStyles.inputLabel}>Phone number</Text>

                <TextInput
                  id={'textInput'}
                  showSoftInputOnFocus={true}
                  keyboardType={'numeric'}
                  variant="standard"
                  maxLength={8}
                  onFocus={() => setShowImage(false)}
                  onBlur={() => setShowImage(true)}
                  textContentType="telephoneNumber"
                  placeholder={'00000000'}
                  placeholderTextColor={'#E7E2DE'}
                  value={phoneNumber}
                  onChangeText={handlePhoneNumberChange}
                  color={error ? '#FF9292' : '#2F2F2F'}
                  inputStyle={[
                    error
                      ? phoneNumberStyles.error
                      : phoneNumberStyles.codeNumber,
                    {
                      alignItems: 'center',
                      top: 6,
                      paddingStart: 2,
                    },
                  ]}
                  inputContainerStyle={[
                    phoneNumberStyles.inputContainer,
                    {borderColor: error ? '#FF9292' : '#DDE0E3'},
                  ]}
                  style={{width: 315}}
                  leadingContainerStyle={
                    phoneNumberStyles.leadingContainerStyle
                  }
                  leading={() => (
                    <View style={phoneNumberStyles.leadingFirstChild}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 7,
                        }}>
                        <Text
                          style={
                            error
                              ? phoneNumberStyles.error
                              : phoneNumberStyles.codeNumber
                          }>
                          ARM
                        </Text>
                        {/*<SelectIcon error={error} />*/}
                      </View>
                      <Text
                        style={
                          error
                            ? phoneNumberStyles.error
                            : phoneNumberStyles.codeNumber
                        }>
                        +374
                      </Text>
                    </View>
                  )}
                />
                <View style={phoneNumberStyles.errorContainer}>
                  {error ? (
                    <>
                      {/*<WrongIcon />*/}
                      <Text style={phoneNumberStyles.errorText}>{error}</Text>
                    </>
                  ) : null}
                </View>
                {/*<PrivacyPolicyAndTerms*/}
                {/*  setChecked={setCheckedPrivacyPolicy}*/}
                {/*  checked={checkedPrivacyPolicy}*/}
                {/*/>*/}
              </View>

              {/*<AppButton*/}
              {/*  title="Request OTP"*/}
              {/*  isLoading={signInQuery.isLoading}*/}
              {/*  disabled={*/}
              {/*    signInQuery.isLoading || phoneNumber.length < 8 || !!error*/}
              {/*  }*/}
              {/*  textStyle={[*/}
              {/*    globalStyles.btnText,*/}
              {/*    {*/}
              {/*      color:*/}
              {/*        phoneNumber.length === 8 && checkedPrivacyPolicy && !error*/}
              {/*          ? '#FFFFFF'*/}
              {/*          : '#7B7B7B',*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*  onPress={handleSubmitBtn}*/}
              {/*  style={[*/}
              {/*    globalStyles.button,*/}
              {/*    {*/}
              {/*      borderColor:*/}
              {/*        phoneNumber.length === 8 && checkedPrivacyPolicy && !error*/}
              {/*          ? '#F5F5F5'*/}
              {/*          : '#DDE0E3',*/}
              {/*      backgroundColor:*/}
              {/*        phoneNumber.length === 8 && checkedPrivacyPolicy && !error*/}
              {/*          ? '#3875F6'*/}
              {/*          : '#F5F5F5',*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*/>*/}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>

      <StatusBar barStyle="default" />
    </ScrollView>
  );
};
