import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

export const searchInputStyle = StyleSheet.create({
  container: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 57,
  },
  containerStyle: {
    width: window.width - 76, //314
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    // borderColor: 'blue',
    // borderWidth: 1,
    elevation: 5,
  },
  searchInput: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.1,
    padding: 0,
    height: 32,
    flex: 1,
    marginLeft: 3,
    paddingRight: 10,
    color: '#7B7B7B',
  },
});
