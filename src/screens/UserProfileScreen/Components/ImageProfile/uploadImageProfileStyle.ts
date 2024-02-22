import {Dimensions, StyleSheet} from 'react-native';
import {window} from "../../../index.ts";

export const uploadImageProfileStyle = StyleSheet.create({
  uploadImageContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    // backgroundColor: '#FFF',
    width: window.width,
    alignItems: 'center',
  },

  openCameraBtn: {
    backgroundColor: '#7C819E',
    padding: 5,
    position: 'absolute',
  },

  imageContainer: {
    position: 'relative',
  },

  cameraImage: {
    position: 'absolute',
    bottom: -2,
    right: 0,
    zIndex: 10,
  },

  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#7C819E',
    shadowColor: 'red',
    elevation: 2,
  },

  userName: {
    color: '#000',
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontStyle: 'normal',
    marginTop: 9,
  },
});
