import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const serviceTypeListStyle = StyleSheet.create({
  category: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#344054',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 30,
  },
  navItemScrollContainer: {
    width: window.width,
    padding: 5,
    marginLeft: 25,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
    marginLeft: 5,
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
  },
  navItemText: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default serviceTypeListStyle;
