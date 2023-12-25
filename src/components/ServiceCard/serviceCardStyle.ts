import {StyleSheet} from 'react-native';

const serviceCardStyle = StyleSheet.create({
  backgroundImage: {
    height: 96,
    borderRadius: 8,
  },

  defaultBgImageContainer: {
    height: 96,
    borderRadius: 8,
    backgroundColor: '#7C819E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  cardIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
    marginLeft: 4,
    borderWidth: 1,
    borderStyle: 'solid',
  },

  defaultIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 8,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C819E',
  },

  defaultIconText: {
    fontFamily: 'NotoSansArmenian-Medium', // << ?
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    fontStyle: 'normal',
    color: '#FFF',
  },

  title: {
    fontFamily: 'NotoSansArmenian-Medium', // << ?
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'normal',
    color: '#000000',
    maxWidth: 210,
  },

  topicTitle: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: '#353535',
  },

  topicText: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#646868',
    marginTop: 2,
    marginBottom: 6,
    marginHorizontal: 3,
  },

  categoryIcon: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: '#FFF',
    backgroundColor: '#3875F6',
    borderRadius: 8,
    marginTop: 5,
    height: 24,
    paddingHorizontal: 6,
  },

  descriptionText: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#7B7B7B',
  },
});

export default serviceCardStyle;
