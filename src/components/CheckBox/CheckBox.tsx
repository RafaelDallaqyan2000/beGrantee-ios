import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {checkBoxStyle} from './checkBoxStyle';
import CheckIcon from './CheckIcon';

interface CheckBoxType {
  width?: number;
  height?: number;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  checked: boolean;
  handleChecked: (check: any) => any;
  customStyle?: StyleProp<ViewStyle>;
}
export function CheckBox({
  width = 20,
  height = 20,
  text,
  textStyle,
  checked = false,
  handleChecked = () => {},
  customStyle,
}: CheckBoxType) {
  const checkBoxBorderColor = checked ? '#3875F6' : '#D0D5DD';
  const checkBoxBackgroundColor = checked ? '#3875F6' : '#FFF';
  return (
    <TouchableOpacity
      onPress={() => handleChecked(!checked)}
      style={[
        checkBoxStyle.container,
        {
          width,
          height,
          backgroundColor: checkBoxBackgroundColor,
          borderColor: checkBoxBorderColor,
        },
        customStyle,
      ]}>
      {checked && <CheckIcon />}
      {text && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
}
