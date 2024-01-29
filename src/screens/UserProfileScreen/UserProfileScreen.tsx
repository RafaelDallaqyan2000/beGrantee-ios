import React, {useContext} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {AuthContext} from '../../../App';
import SecureStorage from 'react-native-encrypted-storage';
import globalStyles from '../../styles/globalStyles';
import {userProfileScreenStyle} from './userProfileScreenStyle';
import {UploadImageProfile} from './Components/ImageProfile';
import {ProfileSettings} from './Components/ProfileSettings.tsx/ProfileSettings';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const window = Dimensions.get('window');

export function UserProfileScreen() {
  const {setToken} = useContext(AuthContext);
  const {navigate} = useNavigation();

  const loadingScreen = useSelector(
    (store: any) => store.reducer?.loadingUserProfileScreen,
  );

  const handleLogOutBtnClick = () => {
    SecureStorage.removeItem('token');
    setToken(null);
  };

  const handleNotificationSwitch = () => {};

  const handleCompaniesPress = () => navigate('Companies' as never);
  const handlePackagesPress = () => navigate('Packages' as never);
  const handleLanguagePress = () => navigate('Language' as never);
  const handlePrivacyPolicyPress = () => navigate('PrivacyPolicy' as never);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {loadingScreen ? null : (
        <Text
          style={[globalStyles.screenTitle, userProfileScreenStyle.pageTitle]}>
          My Profile
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
          callbackSwitchNotification={handleNotificationSwitch}
          logOutClick={handleLogOutBtnClick}
        />
      </View>
    </SafeAreaView>
  );
}
