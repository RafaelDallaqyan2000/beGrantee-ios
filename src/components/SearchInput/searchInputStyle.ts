import {StyleSheet} from 'react-native';
import {window} from "../../screens";


export const searchInputStyle = StyleSheet.create({
  container: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  containerStyle: {
    width: window.width - 60,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
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
