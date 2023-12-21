import axios from './axiosService';
import {HOST} from './index';

export function getAllUserPackages({token}: {token: string}) {
  return axios
    .get(`${HOST}/api/profile/user/packages`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
}
