import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {NotifyIcon} from '../../icons';
import React, {useCallback, useContext, useState} from 'react';
import {ErrorScreen, NotificationItem} from '../../components';
import {notificationStyles} from './notificationStyles';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {
  getNotifications,
  getOnReadNotification,
} from '../../services/getNotifications';
import {AuthContext} from '../../../App';
import {NotificationItemType} from '../../components/NotificationItem/NotificationItem';
import {useFocusEffect} from '@react-navigation/native';
import {LoadingNotificationScreen} from '../../LoadingScreens';
import ErrorImage from '../../images/ErrorImage';

export function NotificationScreen() {
  const [loadingNotificationScreen, setLoadingNotificationScreen] =
    useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);

  const {token} = useContext(AuthContext);

  const {} = useQuery({
    queryKey: [],
    initialData: [],
    queryFn: () => getOnReadNotification({token}),
  });

  const {
    data: notifications,
    refetch: refetchNotifications,
    isLoading: loadingNotifications,
  } = useQuery({
    queryKey: [QueryRoute.notifications],
    initialData: [],
    queryFn: () => getNotifications({token}),
    onSuccess: data => {
      if (!data.length) {
        setShowEmptyScreen(true);
      } else {
        setShowEmptyScreen(false);
      }
      setLoadingNotificationScreen(false);
      setShowErrorScreen(false);
    },
    onError: error => {
      console.log(error, 'error from /api/notifications');
      setShowErrorScreen(true);
      setLoadingNotificationScreen(false);
      return error;
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetchNotifications();
      return () => {
        getOnReadNotification({token});
      };
    }, []),
  );

  if (loadingNotificationScreen) {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <LoadingNotificationScreen />
      </ScrollView>
    );
  } else if (showErrorScreen) {
    return (
      <ErrorScreen
        loadingScreen={loadingNotifications}
        refresh={refetchNotifications}
        marginTop={210}
      />
    );
  } else if (showEmptyScreen) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loadingNotifications}
            onRefresh={refetchNotifications}
            progressBackgroundColor={'#FFF'}
            colors={['#3875F6', '']}
          />
        }>
        <View style={{alignItems: 'center'}}>
          <Text style={notificationStyles.ifNotNotification}>Notification</Text>
          <NotifyIcon />
          <Text style={notificationStyles.emptyNotificationText}>
            OOOPS! It’s Empty
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <>
      <Text style={notificationStyles.notificationTitle}>Notification</Text>
      <ScrollView
        style={{backgroundColor: '#F8F8F9'}}
        refreshControl={
          <RefreshControl
            refreshing={loadingNotifications}
            onRefresh={refetchNotifications}
            progressBackgroundColor={'#FFF'}
            colors={['#3875F6', '']}
          />
        }>
        {notifications.length &&
          notifications?.map((item: NotificationItemType) => (
            <NotificationItem key={item.id} item={item} />
          ))}
      </ScrollView>
    </>
  );
}
