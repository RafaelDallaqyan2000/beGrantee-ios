import {HANDLE_REDUX_CHANGE} from './types';

const initialState = {
  searchValue: '',
  canceledTransaction: false,
  screenTitle: 'loadingScreen',
  showMoreInServiceScreen: true,
  detailsInfo: '',
  pricingIngo: '',
  searchText: '',
  loadingUserProfileScreen: true,
  isNewVersion: {}
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HANDLE_REDUX_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
