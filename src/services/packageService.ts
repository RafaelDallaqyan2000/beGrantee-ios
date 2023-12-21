import axios from './axiosService';
import {HOST} from './index';

export function getPackages(token: string, searchText: string) {
  return axios
    .get(`${HOST}/api/cards?searchText=${searchText ?? ''}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data.data;
    });
  // .catch(err => {
  //   console.log(err, 'error from /api/cards');
  //   return err;
  // });
}

export function getPackagesByServiceId(
  token: string | null | undefined,
  serviceId: number | string,
) {
  return axios
    .get(`${HOST}/api/cards/service/${serviceId}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data;
    });
  // .catch(err => {
  //   console.log(err, 'error from /api/cards/partner/{partnerId}');
  //   return err;
  // });
}
