export const HOST: string = 'http://staging-mobile.begrantee.com';
//https://staging-mobile.begrantee.com

export {getAllCategories} from './getAllCategories.ts';
export {getCompanies} from './getCompanies.ts';
export {getAllUserPackages} from './getAllUserPackages.ts';
export {getProfileInfo, editProfileImage} from './getProfileInfo.ts';
export {loginByPhone, verifyCode, getCountryCodes} from './authService.ts';
export {getAllServices} from './getAllServices.ts';
export {
  getServicesByPackageId,
  getServiceTypesByPackageAndCategoryId,
  getServiceDetailsByCompanyId,
} from './serviceService.ts';
export {getNotifications, getOnReadNotification, checkNewNotification} from './getNotifications.ts';
export {getTransactionData, cancelTransaction} from './getTransactionData.ts';
export {getTransactionHistory} from './getTransactionHistory.ts';
export {getPackagesByServiceId, getPackages} from './packageService.ts';
