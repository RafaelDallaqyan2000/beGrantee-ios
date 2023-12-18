/*
 * @Author: edmond
 * @Date:   2018-03-20 17:51:08
 * @Last Modified by:   edmond
 * @Last Modified time: 2018-03-26 16:36:38
 */

import {Dimensions} from 'react-native';

export const getScreenWidth = () => Dimensions.get('window').width;
export const getScreenHeight = () => Dimensions.get('window').height;

export const Colors = {
  containerBackgroundColor: '#FEFFFE',
  codeViewBorderColor: 'grey',
  focusedCodeViewBorderColor: '#1192F6',
  codeColor: '#222',
  coverColor: 'black',
};

export const Constants = {
  autoFocus: false,
  verifyCodeLength: 5,
  codeViewWidth: getScreenWidth() / (3 * 5 + 1),
  codeViewBorderWidth: 1.5,
  codeViewBorderRadius: 5,
  codeFontSize: 16,
  secureTextEntry: false,
  warningTitle: 'Warining',
  warningContent: 'Only numbers to be entered',
  warningButtonText: 'OK',
};

export function getCodeArray(codeArray, verifyCodeLength) {
  const codeArrayLength = codeArray.length;
  for (let i = 0; i < verifyCodeLength; i++) {
    if (i >= codeArrayLength) {
      codeArray[i] = '';
    }
  }
  return codeArray;
}
