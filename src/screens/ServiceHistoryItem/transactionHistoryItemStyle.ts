import {StyleSheet} from 'react-native';
import {window} from '../index.ts';

export const transactionHistoryItemStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    gap: 8,
  },

  title: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#7B7B7B',
  },

  value: {
    color: '#000000CC',
    fontFamily: 'NotoSansArmenian-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    maxWidth: 200,
  },

  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  totalContainer: {
    paddingTop: 4,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#E7E2DE',
  },

  total: {
    fontFamily: 'NotoSansArmenian-Regular',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: '#2F2F2F',
  },

  status: {
    color: '#000000CC',
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
  },

  detailsContainer: {
    alignItems: 'flex-end',
  },

  detailsTouchableContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#3875F6',
    borderStyle: 'solid',
  },

  details: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    color: '#3875F6',
  },

  lineBottomChild: {
    width: window.width - 60,
    backgroundColor: '#E7E2DE',
    marginVertical: 12,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  companyLogo: {
    width: 32,
    height: 32,
    borderRadius: 4,
    shadowColor: 'rgba(171, 190, 209, 1)',
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
  },

  companyImage: {
    borderRadius: 4,
  },

  itemTitle: {
    width: (window.width - 60) / 1.4,
  },

  itemTotalContainer: {
    paddingTop: 12,
    borderTopWidth: 2,
    borderTopColor: '#344054',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemTotalAmount: {
    fontFamily: 'NotoSansArmenian-Medium',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#2F2F2F',
  },
});
