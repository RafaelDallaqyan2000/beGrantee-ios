import {StyleSheet} from 'react-native';
import {window} from '..';

export const dontAllowCameraStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: window.height - 70,
  },

  header: {
    flexDirection: 'row',
  },

  backContainer: {
    width: 70,
    height: 50,
    padding: 10,
  },

  pageTitle: {
    width: window.width - 70,
    alignItems: 'center',
    paddingRight: 70,
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000000CC',
  },

  textContainer: {
    gap: 15,
    height: window.height - 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#000000CC',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  description: {
    color: '#000000CC',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },

  settingsContainer: {
    alignItems: 'center',
  },

  settings: {
    color: '#3875F6',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
});