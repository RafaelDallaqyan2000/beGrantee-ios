import axios from './axiosService';
import {HOST} from './index';
import {PackageAmountModel} from '../models/packages';

interface TransactionType {
  date: Date;
  phone: number;
  guid: number | string;
  total: number | string;
  connectionId: string;
  companyAmounts: PackageAmountModel[];
}
export function getTransactionData(props: TransactionType, token: string) {
  return axios
    .post(`${HOST}/api/payment/transaction`, props, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
    .catch(err => {
      console.log(err, 'error from getTransactionData');
      return err;
    });
}

export function cancelTransaction(
  transactionIds: never[] | undefined,
  token: string,
) {
  return axios
    .post(
      `${HOST}/api/payment/transaction/cancel`,
      {transactionIds},

      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`, // notice the Bearer before your token
        },
      },
    )
    .then(res => res.data.success)
    .catch(err => {
      console.log(err, 'error from CancelTransaction');
      return err;
    });
}
