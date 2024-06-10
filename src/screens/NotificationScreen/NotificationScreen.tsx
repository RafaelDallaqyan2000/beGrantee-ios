import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {NotifyIcon} from '../../icons';
import React, {useCallback, useContext, useState} from 'react';
import {ErrorScreen, NotificationItem} from '../../components';
import {notificationStyles} from './notificationStyles';
import {QueryRoute} from '../../react-query/query-routes';
import {getNotifications, getOnReadNotification} from '../../services';
import {AuthContext} from '../../../App';
import {LoadingNotificationScreen} from '../../LoadingScreens';
import {NotificationItemType} from '../../components/NotificationItem';
import {window} from '../index.ts';
import { useTranslation } from 'react-i18next';

export function NotificationScreen() {
  const [loadingNotificationScreen, setLoadingNotificationScreen] =
    useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const {t} = useTranslation();
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
      console.log(data[0].createdUtcDate, '77777777777');
      
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
      <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
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
            <Text style={notificationStyles.ifNotNotification}>
              {t('Notification')}
            </Text>
            <View
              style={{
                alignItems: 'center',
                height: window.height - 250,
                justifyContent: 'center',
              }}>
              <NotifyIcon />
              <Text style={notificationStyles.emptyNotificationText}>
                {t("OOOPS! It's Empty")}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // @ts-ignore
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Text style={notificationStyles.notificationTitle}>{t('Notification')}</Text>
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
    </SafeAreaView>
  );
}
