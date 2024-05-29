import {View} from 'react-native-animatable';
import {Linking, Text} from 'react-native';
import {BlueCamera} from '../../images';
import {dontAllowCameraStyles} from './dontAllowCameraStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackIcon from '../../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function CameraDontAllowScreen() {
  const navigation = useNavigation();
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
        <Text style={dontAllowCameraStyles.pageTitle}>Camera</Text>
      </View>
      <View style={dontAllowCameraStyles.textContainer}>
        <BlueCamera />
        <Text style={dontAllowCameraStyles.title}>
          Allow to access your camera
        </Text>
        <Text style={dontAllowCameraStyles.description}>
          This lets you share photos preview effects.
        </Text>
        <TouchableOpacity
          style={dontAllowCameraStyles.settingsContainer}
          onPress={handleClickOpenSettings}>
          <Text style={dontAllowCameraStyles.settings}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}