import {StyleSheet} from 'react-native';
import {window} from "../../screens";


export const popUpStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingVertical: 41,
    paddingHorizontal: 30,
    shadowColor: '#000',
    width: window.width,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeIcon: {
    position: 'absolute',
    right: 21,
    top: 3,
    padding: 10,
  },
});
