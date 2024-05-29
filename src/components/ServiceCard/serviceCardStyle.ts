import {StyleSheet} from 'react-native';

const serviceCardStyle = StyleSheet.create({
  backgroundImage: {
    height: 96,
    borderRadius: 8,
  },

  defaultBgImageContainer: {
    height: 20,
    borderRadius: 8,
    backgroundColor: '#FFF',
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
  },

  defaultIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 8,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C819E',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  defaultIconText: {
    fontFamily: 'NotoSansArmenian-Medium', // << ?
    fontWeight: '500',
    fontSize: 24,
    fontStyle: 'normal',
    color: '#FFF',
  },

  defaultPreviewStyle: {
    height: 13
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
    paddingVertical: 4,
    paddingHorizontal: 6,
    shadowColor: '#3875F6',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
    overflow: 'hidden',
  },

  descriptionText: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#7B7B7B',
  },
});

export default serviceCardStyle;
