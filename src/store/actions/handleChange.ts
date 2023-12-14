import {HANDLE_REDUX_CHANGE} from '../types';

export const handleChange = (key: string, value: any): any => {
  return (dispatch: any) => {
    dispatch({
      type: HANDLE_REDUX_CHANGE,
      payload: {
        key,
        value,
      },
    });
  };
};
