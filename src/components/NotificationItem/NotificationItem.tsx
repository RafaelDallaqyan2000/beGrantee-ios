import {Text, View} from 'react-native';
import {notificationItemStyle} from './notificationItemStyle';
import {formatDate} from '../../helpers/formatDate';
import NotificationItemIcon from '../../icons/NotificationScreen/NotificationItemIcon';

export interface NotificationItemType {
  id?: any;
  item: {
    iconBackgroundColor?: string;
    icon?: string;
    title?: string;
    createdUtcDate?: string;
    isSeen?: boolean;
    shortText?: string;
    id?: string | number;
  };
}
export function NotificationItem({item}: NotificationItemType) {
  const {
    iconBackgroundColor = '',
    title = '',
    createdUtcDate = '',
    isSeen = false,
    shortText = '',
  } = item;

  if (!Object.keys(item).length) {
    return;
  }

  return (
    <View style={[notificationItemStyle.container]}>
      <Text style={notificationItemStyle.date}>
        {!!createdUtcDate && formatDate(createdUtcDate)}
      </Text>
      <View style={{flexDirection: 'row', gap: 12}}>
        <View style={notificationItemStyle.icon}>
          <NotificationItemIcon color={iconBackgroundColor} />
        </View>
        <View style={notificationItemStyle.body}>
          <View style={notificationItemStyle.textContainer}>
            <Text style={notificationItemStyle.packageName}>{title}</Text>
            <Text style={notificationItemStyle.info}>{shortText}</Text>
          </View>
          {!isSeen && <View style={notificationItemStyle.isNew} />}
        </View>
      </View>
    </View>
  );
}
