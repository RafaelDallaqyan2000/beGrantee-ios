import axios from './axiosService';
import {HOST} from './index';

export function getCompanies({token}: {token: string}) {
  return axios
    .get(`${HOST}/api/profile/user-companies`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data.data;
    });
}
