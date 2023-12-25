import {StyleSheet} from 'react-native';

export const navigationBarStyle = StyleSheet.create({
  navBarContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#CACDD8'
  },

  title: {
    fontSize: 14,
    lineHeight: 18,
    color: '#3875F6',
    paddingBottom: 12,
    paddingHorizontal: 1,
    borderBottomColor: '#3875F6',
  },
});
