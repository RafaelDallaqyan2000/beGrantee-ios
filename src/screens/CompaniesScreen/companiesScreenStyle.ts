import {Dimensions, StyleSheet} from 'react-native';

export const companiesScreenStyle = StyleSheet.create({
  companyContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 16,
    marginTop: 10,
    gap: 8,
  },

  companyLogo: {
    width: 34,
    height: 34,
    borderRadius: 8,
    shadowColor: '#000',
    elevation: 5,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  companyName: {
    fontFamily: 'NotoSansArmenian-Medium',
    color: '#344054',
    flexWrap: 'wrap',
    fontWeight: '500',
    fontSize: 18,
    maxWidth: 240,
  },

  infoIcon: {
    padding: 6,
  },

  infoContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  emptyLogo: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF'
  },
});
