import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {AuthContext} from '../../../App';
import SecureStorage from 'react-native-encrypted-storage';
import globalStyles from '../../styles/globalStyles';
import {userProfileScreenStyle} from './userProfileScreenStyle';
import {UploadImageProfile} from './Components/ImageProfile';
import {ProfileSettings} from './Components/ProfileSettings.tsx/ProfileSettings';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {window} from '../index';
import { ChooseLanguagePopUp } from '../../components/ChooseLanguagePopUp/ChooseLanguagePopUp';
import { useTranslation } from 'react-i18next';

export function UserProfileScreen() {
  const {setToken} = useContext(AuthContext);
  const {navigate} = useNavigation();
  const [openLanguagePopUp, setOpenLanguagePopUp] = useState(false);
  const {t} = useTranslation();

  const loadingScreen = useSelector(
    (store: any) => store.reducer?.loadingUserProfileScreen,
  );

  const handleLogOutBtnClick = () => {
    SecureStorage.removeItem('token');
    setToken(null);
  };

  // const handleNotificationSwitch = () => {};

  const handleCompaniesPress = () => navigate('Companies' as never);
  const handlePackagesPress = () => navigate('Packages' as never);
  const handleLanguagePress = () => {setOpenLanguagePopUp(true)};
  const handlePrivacyPolicyPress = () => navigate('PrivacyPolicy' as never);
  const handleLiveChatPress = () => navigate('LiveChat' as never);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{height: window.height, backgroundColor: '#F8F8F9'}}>
        {loadingScreen ? null : (
          <Text
            style={[
              globalStyles.screenTitle,
              userProfileScreenStyle.pageTitle,
            ]}>
            {t("My Profile")}
          </Text>
        )}
        <View style={{backgroundColor: '#FFF'}}>
          <UploadImageProfile />
        </View>
        <View style={userProfileScreenStyle.body}>
          <ProfileSettings
            handleCompaniesPress={handleCompaniesPress}
            handlePackagesPress={handlePackagesPress}
            handleLanguagePress={handleLanguagePress}
            handlePrivacyPolicyPress={handlePrivacyPolicyPress}
            handleLiveChatPress={handleLiveChatPress}
            logOutClick={handleLogOutBtnClick}
            // callbackSwitchNotiçfication={handleNotificationSwitch}
          />
        </View>
        <ChooseLanguagePopUp
          openPopUp={openLanguagePopUp}
          closePopUp={() => setOpenLanguagePopUp(false)}
          handleSelectLanguage={() => {}} 
        />
      </View>
    </SafeAreaView>
  );
}
