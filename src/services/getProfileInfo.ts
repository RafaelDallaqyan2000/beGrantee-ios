import axios from './axiosService';
import {HOST} from './index';

export function getProfileInfo({token}: {token: string}) {
  return axios
    .get(`${HOST}/api/profile/user/info`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
    .catch(error => error);
}


type ProfileImageType = {
  token: string; 
  image: {
    uri: string; 
    type: string; 
    fileName: string;

  }
};

export function editProfileImage(props: ProfileImageType ) {
  const {token, image} = props;
  const data = new FormData();

  // image.height = 2000;
  data.append('file', {
    uri: image.uri,
    type: image.type,
    name: image.fileName,
  });

  return axios
    .post(`${HOST}/api/profile/user/photo/upload`, data, {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(data => {
      return data.data.data.path;
    })
    .catch(err => {
      console.log(err, 'error from /api/profile/user/photo/upload');
      return err;
    });
}
