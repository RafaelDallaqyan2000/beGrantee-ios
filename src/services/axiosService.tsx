import axios from 'axios';
import SecureStorage from 'react-native-encrypted-storage';
import {NativeModules} from 'react-native';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      SecureStorage.removeItem('token');
      NativeModules.DevSettings.reload();
    }
    return Promise.reject(error);
  },
);
export default axios;
