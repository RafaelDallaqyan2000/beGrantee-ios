import axios from 'axios';
import SecureStorage from 'react-native-encrypted-storage';

axios.interceptors.request.use(async config => {
  const lang = await SecureStorage.getItem("language");
  config.headers["Accept-Language"] = lang;

  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error, "<<<<<");
    
    if (error?.response?.status === 401) {
      SecureStorage.removeItem('token').then(() => {
        //Todo: need to restart app
        // RNRestart.restart();
      });
    }
    return Promise.reject(error);
  },
);
export default axios;
