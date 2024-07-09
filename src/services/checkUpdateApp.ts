import store, { handleChange } from '../store';
import axios from './axiosService';
import {HOST} from './index';

type CheckNewVersionType = {
  token: string;
  myAppVersion: string;
};

export function checkUpdateApp({token, myAppVersion}: CheckNewVersionType) {
  return axios
    .get(`${HOST}/api/version/latest?version=${myAppVersion}&isAndroid=false`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
    .then((data) => {
        store.dispatch(handleChange('isNewVersion', data))
    })
    .catch(err => {throw err})
}
