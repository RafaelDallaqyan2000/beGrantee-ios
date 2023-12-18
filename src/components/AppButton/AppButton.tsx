import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import React from 'react';

interface ButtonParams {
  onPress?: any;
  onFocus?: any;
  onBlur?: any;
  title?: string;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
  secondViewStyle?: any;
  isLoading?: boolean;
  spinnerColor?: string;
}
const AppButton = ({
  onPress = () => {},
  onFocus = () => {},
  onBlur = () => {},
  title,
  style,
  textStyle,
  disabled = false,
  secondViewStyle,
  isLoading = false,
  spinnerColor = '#FFF',
}: ButtonParams) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style ? style : globalStyles.button}>
      <View
        style={[
          globalStyles.buttonContainer,
          secondViewStyle,
          btnStyle.btnContainer,
        ]}>
        <Text style={textStyle}>{title}</Text>
        {isLoading && (
          <View style={btnStyle.loadingContainerStyle}>
            <ActivityIndicator size={15} color={spinnerColor} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const btnStyle = {
  btnContainer: {
    position: 'relative',
    width: '100%',
  },

  loadingContainerStyle: {
    position: 'absolute',
    right: 25,
  },
};
