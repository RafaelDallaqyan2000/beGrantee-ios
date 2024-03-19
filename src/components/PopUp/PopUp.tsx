import {Modal, Pressable, StyleProp, View, ViewStyle} from 'react-native';
import {popUpStyle} from './PopUpStyle';
import {CloseIcon} from '../../icons';

type PupUpType = {
  open: boolean;
  children: any;
  close: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  closeStyle?: StyleProp<ViewStyle>;
};

export function PopUp({
  open,
  close = () => {},
  children,
  containerStyle,
  closeStyle,
}: PupUpType) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={close}>
      <Pressable onPress={close} style={popUpStyle.centeredView} />
      <View style={[popUpStyle.modalView, containerStyle]}>
        <Pressable style={[popUpStyle.closeIcon, closeStyle]} onPress={close}>
          <CloseIcon onPress={close} />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
}
