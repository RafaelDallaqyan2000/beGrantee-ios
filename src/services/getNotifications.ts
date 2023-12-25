import axios from './axiosService';
import {HOST} from './index';

interface NotificationsType {
  token: string | null | undefined;
}

export function getNotifications({token}: NotificationsType) {
  return axios
    .get(`${HOST}/api/notifications`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data.data)
}

export function getOnReadNotification({
  token,
}: {
  token: string | null | undefined;
}) {
  return axios
    .get(`${HOST}/api/notification/read`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`, // notice the Bearer before your token
      },
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err, 'error from /api/notification/read');
      return err;
    });
}
