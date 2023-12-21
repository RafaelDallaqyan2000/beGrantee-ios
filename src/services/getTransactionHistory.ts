import axios from './axiosService';
import {HOST} from './index';

export function getTransactionHistory({token}: {token: string}) {
  return axios
    .get(`${HOST}/api/transaction/history`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data.data;
    });
}
