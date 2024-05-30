import {Text, TouchableOpacity, View} from 'react-native';
import {profileSettingsStyle} from './profileSettingsStyle';
import {
  LiveChatIcon,
  SecurityIcon,
  SettingsCompanyIcon,
  SurpriseCaseIcon,
  LogOutIcon,
  LanguageIcon,
} from '../../../../icons';
// import {RightPointerIcon} from '../../../../icons/RightPointerIcon';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

//Todo: will be use
// const switchCustomStyle = {
//   true: {
//     borderWidth: 0,
//   },
//   false: {
//     borderWidth: 1,
//     justifyContent: 'flex-start',
//     left: 0,
//   },
// };

type ProfileSettingsType = {
  logOutClick: () => any;
  callbackSwitchNotification?: () => any;
  handleCompaniesPress: () => any;
  handlePackagesPress: () => any;
  handleLanguagePress: () => any;
  handlePrivacyPolicyPress: () => any;
  handleLiveChatPress: () => any;
};

const languages: any = {
  en: 'English',
  hy: 'Հայերեն',
  ru: 'Русский'
}

export function ProfileSettings({
  logOutClick,
  // callbackSwitchNotification = () => {},
  handleCompaniesPress = () => {},
  handlePackagesPress = () => {},
  handleLanguagePress = () => {},
  handlePrivacyPolicyPress = () => {},
  handleLiveChatPress = () => {},
}: ProfileSettingsType) {
  // Todo: Turn on/off push notifications
  // const [switchNotification, setSwitchNotification] = useState(false);
  // const handleSwitchNotification = () => {
  //   setSwitchNotification(prev => !prev);
  //   callbackSwitchNotification();
  // };

  const {t} = useTranslation();

  const selectedLanguage = useSelector((state: any) => state.reducer.selectedLanguage);
  
  return (
    <>
      <TouchableOpacity
        onPress={handleCompaniesPress}
        style={profileSettingsStyle.settingContainer}>
        <SettingsCompanyIcon />
        <Text style={profileSettingsStyle.settingsName}>{t("Companies")}</Text>
      </TouchableOpacity>
      <View style={profileSettingsStyle.line} />

      <TouchableOpacity
        onPress={handlePackagesPress}
        style={profileSettingsStyle.settingContainer}>
        <SurpriseCaseIcon />
        <Text style={profileSettingsStyle.settingsName}>{t("Packages")}</Text>
      </TouchableOpacity>
      <View style={profileSettingsStyle.line} />

      {/* Todo: we'll add  in the feature (Change language)*/}
      <TouchableOpacity
       onPress={handleLanguagePress}
       style={profileSettingsStyle.settingContainer}>
       <LanguageIcon />
       <View style={profileSettingsStyle.titleContainer}>
         <Text style={profileSettingsStyle.settingsName}>{t("Language")}</Text>
         <Text style={[profileSettingsStyle.settingsName, {color: '#3875F6'}]}>
           {languages[selectedLanguage]}
         </Text>
       </View>
      </TouchableOpacity>
      <View style={profileSettingsStyle.line} />

      {/*Todo: we'll add  in the feature (button which turn on/off push notification)*/}
      {/*<TouchableOpacity*/}
      {/*  onPress={handleSwitchNotification}*/}
      {/*  style={profileSettingsStyle.settingContainer}>*/}
      {/*  <SettingsNotificationIcon />*/}
      {/*  <View style={profileSettingsStyle.titleContainer}>*/}
      {/*    <Text style={profileSettingsStyle.settingsName}>Notifications</Text>*/}
      {/*    <Switch*/}
      {/*      onValueChange={handleSwitchNotification}*/}
      {/*      value={switchNotification}*/}
      {/*      circleSize={20}*/}
      {/*      backgroundActive={'#3875F6'}*/}
      {/*      backgroundInactive={'#FFF'}*/}
      {/*      circleBorderActiveColor={'#3875F6'}*/}
      {/*      circleBorderInactiveColor={'#FFF'}*/}
      {/*      circleInActiveColor={'#89939E'}*/}
      {/*      barHeight={20}*/}
      {/*      innerCircleStyle={{width: 16, height: 16}}*/}
      {/*      outerCircleStyle={[*/}
      {/*        profileSettingsStyle.switchCircleStyle,*/}
      {/*        switchCustomStyle[switchNotification],*/}
      {/*      ]}*/}
      {/*      renderActiveText={false}*/}
      {/*      renderInActiveText={false}*/}
      {/*      switchWidthMultiplier={2}*/}
      {/*    />*/}
      {/*  </View>*/}
      {/*</TouchableOpacity>*/}
      {/*<View style={profileSettingsStyle.line} />*/}

      <TouchableOpacity
        onPress={handlePrivacyPolicyPress}
        style={profileSettingsStyle.settingContainer}>
        <SecurityIcon />
        <Text style={profileSettingsStyle.settingsName}>{t("Privacy policy")}</Text>
      </TouchableOpacity>
      <View style={profileSettingsStyle.line} />

      <TouchableOpacity
        onPress={handleLiveChatPress}
        style={profileSettingsStyle.settingContainer}>
        <LiveChatIcon />
        <Text style={profileSettingsStyle.settingsName}>{t("Live Chat")}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={logOutClick} style={{marginTop: 81}}>
        <View style={profileSettingsStyle.line} />

        <View style={profileSettingsStyle.settingContainer}>
          <LogOutIcon />
          <Text style={[profileSettingsStyle.settingsName, {color: '#FF5F5F'}]}>
            {t("Log out")}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
