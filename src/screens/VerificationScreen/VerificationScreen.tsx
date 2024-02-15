import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import styles from '../../styles/globalStyles';
import {StackNavigatorParamList} from '../../navigation/NavigationScreens';
import {RouteProp} from '@react-navigation/native';
import {AuthContext} from '../../../App';
import {useMutation} from '@tanstack/react-query';
import {verifyCode} from '../../services';
import verificationScreenStyle from './verificationScreenStyle';
import BackIcon from '../../icons/BackIcon';
import globalStyles from '../../styles/globalStyles';
import {WelcomeScreen} from './WelcomeScreen/WelcomeScreen';
import SecureStorage from 'react-native-encrypted-storage';
import {SmsVerification} from '../../components';

type RouteProps = RouteProp<StackNavigatorParamList, 'Verification'>;

export function VerificationScreen() {
  const {setToken} = useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [date, setDate] = useState(new Date().getTime());
  const [openWelcomePopUp, setOpenWelcomePopUp] = useState(false);
  const {phoneNumber, phoneCodeId, getResendCode} = route.params;

  const verifyCodeRef = useRef<TextInput>();
  const window = Dimensions.get('window');

  const verifyCodeQuery = useMutation({
    mutationFn: verifyCode,
    onSuccess: data => {
      if (data.success && data.data?.token) {
        setOpenWelcomePopUp(true);
        setTimeout(() => {
          setToken(data.data.token);
          SecureStorage.setItem('token', data.data.token);
        }, 5000);
      } else {
        setError(data.message);
      }
    },
  });

  const handleCodeChange = (code: string) => {
    const onlyNumber = /^[0-9]+$/;

    if (onlyNumber.test(code) || code === '') {
      setCode(code);
      setError('');
    }
  };

  const handleVerifyCode = () => {
    if (code.length === 4) {
      return verifyCodeQuery?.mutate({
        verificationCode: code,
        phoneCodeId,
        phoneNumber,
        deviceToken: 'fixed in front',
      });
    }
  };

  const resetVerifyCode = () => {
    if (verifyCodeRef.current) {
      //@ts-ignore
      verifyCodeRef.current?.reset();
    }
    setError('');
    setCode('');
  };

  useEffect(() => {
    if (code.length === 4) {
      handleVerifyCode();
    }
  }, [code]);

  const seconds = useRef(0);
  seconds.current = 60 - Math.floor((new Date().getTime() - date) / 1000);
  const s = seconds.current;
  const [, setUpdate] = useState(false);

  const forceUpdate = () => setUpdate(prev => !prev);

  useEffect(() => {
    let interval = setInterval(() => {
      forceUpdate();
      if (seconds.current <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const handlePressResendOTP = () => {
    if (s <= 0) {
      getResendCode.mutate({
        phoneCodeId,
        phoneNumber,
      });
      resetVerifyCode();
      setDate(new Date().getTime());
    }
  };

  let checkBorderColor = (code[0] && error) || s <= 0 ? '#FF9292' : '#EAECF0';
  let checkColor = s <= 0 || error ? '#2F2F2F' : '#3875F6';
  let checkBgColor = code[0]
    ? error || s <= 0
      ? '#FF9292'
      : '#EAECF0'
    : '#FFFFFF';

  // @ts-ignore
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={styles.container}>
        <WelcomeScreen visible={openWelcomePopUp} />
        <View style={[globalStyles.screenContainer, {flex: 1}]}>
          <View style={verificationScreenStyle.header}>
            <View style={verificationScreenStyle.backIcon}>
              <BackIcon onPress={() => navigation.goBack()} />
            </View>

            <Text style={verificationScreenStyle.topicOTP}>
              OTP Verification
            </Text>
          </View>

          <View style={verificationScreenStyle.mainContainer}>
            <View style={verificationScreenStyle.body}>
              <Text style={[globalStyles.screenTitle, {marginBottom: 0}]}>
                Enter the code
              </Text>

              <Text
                style={[globalStyles.text, verificationScreenStyle.subtitle]}>
                We just sent you a 4-digit verification code to +374******
                {phoneNumber.slice(phoneNumber.length - 2)}
              </Text>
            </View>

            <View style={[{marginTop: 72}, verificationScreenStyle.footer]}>
              <View>
                <SmsVerification
                  ref={verifyCodeRef}
                  defaultValue={
                    <View
                      style={[
                        verificationScreenStyle.defaultVerificationValue,
                        {
                          backgroundColor:
                            s <= 0 || error ? '#FF9292' : '#EAECF0',
                        },
                      ]}
                    />
                  }
                  verifyCodeLength={4}
                  codeFontSize={24}
                  codeViewWidth={64}
                  codeViewBackgroundColor={checkBgColor}
                  codeViewBorderColor={checkBorderColor}
                  codeViewStyle={{borderRadius: 8}}
                  containerStyle={{width: window.width, alignItems: 'center'}}
                  codeColor={checkColor}
                  containerPaddingLeft={window.width / 14}
                  containerPaddingRight={window.width / 7}
                  codeStyle={verificationScreenStyle.codeVerificationText}
                  containerMarginLeft={10}
                  autoFocus={true}
                  error={s <= 0 || error}
                  onInputChangeText={handleCodeChange}
                  errorBorderColor={checkBorderColor}
                />

                {error ? (
                  <Text style={[verificationScreenStyle.incorrectCode]}>
                    {error}
                  </Text>
                ) : s <= 0 ? (
                  <Text style={[verificationScreenStyle.incorrectCode]}>
                    Empty OTP
                  </Text>
                ) : null}
              </View>
              <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={window.height / 2 - 40}>
                <Text
                  style={[globalStyles.text, verificationScreenStyle.subtitle]}>
                  Didn’t receive any code?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}>
                  <Text
                    onPress={handlePressResendOTP}
                    style={[
                      verificationScreenStyle.resendCode,
                      {
                        color: s <= 0 ? '#3875F6' : '#E7E2DE',
                        textDecorationLine: 'underline',
                      },
                    ]}>
                    Resend OTP
                  </Text>
                  {s > 0 ? (
                    <Text
                      style={[
                        verificationScreenStyle.resendCode,
                        {color: '#3875F6'},
                      ]}>
                      in 00:
                      {s.toString().length < 2 ? `0${s}` : s}
                    </Text>
                  ) : null}
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
