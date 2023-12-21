import axios from './axiosService';
import {HOST} from './index';

export function getAllServices({
  token,
  categoryId,
  searchText
}: {
  token: string;
  categoryId: number | string;
  searchText: undefined | null | string;
}) {
  return axios
    .get(`${HOST}/category/${categoryId}/services?searchText=${searchText}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
}
