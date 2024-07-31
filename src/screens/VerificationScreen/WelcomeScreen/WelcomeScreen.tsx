import { Animated, Modal, SafeAreaView, Text, View } from "react-native";
import React, {useEffect, useRef} from 'react';
import globalStyles from '../../../styles/globalStyles';
import {welcomePopUpStyle} from './welcomePopUpStyle';
import WelcomeScreenImage from '../../../images/WelcomeScreenImage';
import { useTranslation } from "react-i18next";

type WelcomeType = {
  visible: boolean;
  setVisible?: (b: boolean) => {};
};

export function WelcomeScreen({visible}: WelcomeType) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {t} = useTranslation();

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
        <SafeAreaView style={welcomePopUpStyle.container}>
          <View style={welcomePopUpStyle.header}>
            <Text style={globalStyles.screenTitle}>BeGrantee</Text>
            <Text style={welcomePopUpStyle.subTitle}>
              {t('All your benefits in one place')}
            </Text>
          </View>
          <View style={welcomePopUpStyle.imageContainer}>
            <Text style={welcomePopUpStyle.text}>{t('Welcome')}!</Text>
            <WelcomeScreenImage />
          </View>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
}
