import {StyleSheet} from 'react-native';
import {window} from "../../screens";

export const qrScannerScreenStyle = StyleSheet.create({
  scanContainer: {
    width: window.width,
    height: window.height,
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
