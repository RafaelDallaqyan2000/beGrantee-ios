import {Animated, Modal, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import globalStyles from '../../../styles/globalStyles';
import {welcomePopUpStyle} from './welcomePopUpStyle';
import WelcomeScreenImage from '../../../images/WelcomeScreenImage';

type WelcomeType = {
  visible: boolean;
  setVisible?: (b: boolean) => {};
};

export function WelcomeScreen({visible}: WelcomeType) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible}>
      <Animated.View style={{opacity: fadeAnim}}>
        <View style={welcomePopUpStyle.container}>
          <View style={welcomePopUpStyle.header}>
            <Text style={globalStyles.screenTitle}>BeGrantee</Text>
            <Text style={welcomePopUpStyle.subTitle}>
              All your benefits in one place
            </Text>
          </View>
          <Text style={welcomePopUpStyle.text}>Welcome!</Text>
          <WelcomeScreenImage />
        </View>
      </Animated.View>
    </Modal>
  );
}
