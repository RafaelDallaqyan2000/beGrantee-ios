import axios from './axiosService';
import {HOST} from './index';

interface ServiceTypes {
  cardId?: string | number | null | undefined;
  categoryId?: number | string | null;
  searchText: string;
  token: string;
}

export function getServiceTypesByPackageAndCategoryId({
  cardId = 0,
  categoryId = 0,
  searchText = '',
  token,
}: ServiceTypes) {
  return axios
    .post(
      `${HOST}/api/card/category/services`,
      {
        cardId,
        categoryId,
        searchText,
      },

      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`, // notice the Bearer before your token
        },
      },
    )
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log(err, 'error from getServiceTypesByPackageId');
      return err;
    });
}

export function getServiceDetailsByCompanyId({
  companyId,
  token,
}: {
  companyId?: number | string;
  token: any;
}) {
  return axios
    .get(`${HOST}/api/company/${companyId}/details`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data.data;
    })
    .catch(error => {
      console.log(error, 'api error in getServiceDetailsByCompanyId');
      return error;
    });
}

export function getServicesByPackageId(props: {packageId: any; token: string}) {
  const {packageId, token} = props;

  return axios
    .get(`${HOST}/api/card/${packageId}/categories`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => {
      return res.data.data;
    })
    // .catch(err => {
    //   console.log(err, 'fetch error getServicesByPackageId');
    //   return err;
    // });
}
