import {View} from 'react-native-animatable';
import {Linking, Text} from 'react-native';
import {BlueCamera} from '../../images';
import {dontAllowCameraStyles} from './dontAllowCameraStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackIcon from '../../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

export function CameraDontAllowScreen() {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handleClickOpenSettings = () => {
    Linking.openSettings();
  };

  const handleClickBackIcon = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={dontAllowCameraStyles.container}>
      <View style={dontAllowCameraStyles.header}>
        <TouchableOpacity
          onPress={handleClickBackIcon}
          style={dontAllowCameraStyles.backContainer}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={dontAllowCameraStyles.pageTitle}>{t('Camera')}</Text>
      </View>
      <View style={dontAllowCameraStyles.textContainer}>
        <BlueCamera />
        <Text style={dontAllowCameraStyles.title}>
          {t('Allow to access your camera')}
        </Text>
        <Text style={dontAllowCameraStyles.description}>
          {t('This lets you share photos preview effects.')}
        </Text>
        <TouchableOpacity
          style={dontAllowCameraStyles.settingsContainer}
          onPress={handleClickOpenSettings}>
          <Text style={dontAllowCameraStyles.settings}>{t('Open Settings')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}