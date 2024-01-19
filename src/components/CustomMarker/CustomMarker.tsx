import React from 'react';
import * as Animatable from 'react-native-animatable';
import {Dimensions, StyleSheet, View} from 'react-native';
import {marker} from '../../screens/QRCodeScannerScreen/marker';
import {customMarkerStyles} from './customMarkerStyles';

const window = Dimensions.get('window');

export const makeSlideOutTranslation = (
  translationType: string,
  fromValue: number,
) => {
  return {
    from: {
      [translationType]: window.width * -0.1,
    },
    to: {
      [translationType]: window.width * fromValue,
    },
  };
};

export function CustomMarker() {
  return (
    <View style={customMarkerStyles.rectangleContainer}>
      <View style={customMarkerStyles.topOverlay} />
      <View style={{flexDirection: 'row', height: 208}}>
        <View style={customMarkerStyles.leftAndRightOverlay} />
        <View style={customMarkerStyles.rectangle}>
          {marker('#FFF', '100%', '10%', 5, 0)}
          <Animatable.View
            style={customMarkerStyles.scanBar}
            direction="alternate-reverse"
            iterationCount="infinite"
            duration={1700}
            easing="linear"
            animation={makeSlideOutTranslation('translateY', -0.4)}
          />
        </View>
        <View style={customMarkerStyles.leftAndRightOverlay} />
      </View>
      <View style={customMarkerStyles.bottomOverlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
});
