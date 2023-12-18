import axios from './axiosService';
import {CountryCode, ResponseModel} from '../models/common';
import {HOST} from './index';

type LoginParams = {
  phoneNumber?: number | never | string;
  phoneCodeId?: never | number;
  phone?: string;
  codeId?: number;
};

export function loginByPhone(params: LoginParams): Promise<ResponseModel> {
  return axios
    .post<ResponseModel>(`${HOST}/auth/sign-in`, params)
    .then(res => res.data)
    .catch(error => error);
}

type VerificationParams = {
  verificationCode: string;
  phoneCodeId: number;
  phoneNumber: string;
  deviceToken: string;
};

export function verifyCode(params: VerificationParams) {
  return axios
    .post<ResponseModel<{token: string}>>(
      `${HOST}/auth/code-verification`,
      params,
    )
    .then(res => res.data)
    .catch(err => {
      console.log(err, 'error from /auth/code-verification');
      return err;
    });
}

export function getCountryCodes() {
  return axios
    .get<CountryCode[]>(`${HOST}/auth/phone-codes`)
    .then(res => res.data)
    .catch(err => err);
}
