import axios from './axiosService';
import {HOST} from './index';

type GetAllCategoriesType = {
  token: string;
  searchText: string | undefined | null;
};
export function getAllCategories({token, searchText}: GetAllCategoriesType) {
  return axios
    .get(`${HOST}/categories?searchText=${searchText}`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
        
      },
    })
    .then(res => res.data.data);
}
