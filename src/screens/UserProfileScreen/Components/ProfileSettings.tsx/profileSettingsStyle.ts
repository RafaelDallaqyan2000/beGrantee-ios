import {StyleSheet} from 'react-native';

export const profileSettingsStyle = StyleSheet.create({
  settingContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    gap: 8,
  },

  line: {
    borderBottomWidth: 0.5,
    borderColor: '#EAECF0',
    marginVertical: 5,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 30,
  },

  settingsName: {
    color: '#344054',
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 16,
  },

  switchCircleStyle: {
    borderRadius: 15,
    borderColor: '#89939E',
    borderStyle: 'solid',
  },

  packageContainer: {
    padding: 30,
    backgroundColor: '#FFF',
    marginTop: 10,
  },

  packageHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },

  amount: {
    color: '#000000',
    fontFamily: 'NotoSansArmenian-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18,
  },
});
