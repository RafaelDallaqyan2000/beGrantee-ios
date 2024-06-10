import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {PackageItem} from './PackageItem';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {NotifyIcon} from '../../icons';
import {notificationStyles} from '../NotificationScreen/notificationStyles';
import React, {useCallback, useContext, useState} from 'react';
import {getAllUserPackages} from '../../services';
import {AuthContext} from '../../../App';
import {LoadingPackagesScreen} from '../../LoadingScreens';
import {useFocusEffect} from '@react-navigation/native';
import {ErrorScreen} from '../../components';
import {window} from "../../screens";
import { useTranslation } from 'react-i18next';

export function PackagesScreen() {
  const {token}: any = useContext(AuthContext);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const {t} = useTranslation();

  const {
    data: packages,
    isLoading: loadingPackages,
    refetch: reloadPackages,
  } = useQuery({
    queryKey: [QueryRoute.userAllPackages],
    initialData: [],
    queryFn: () => getAllUserPackages({token}),
    onSuccess: data => {
      if (data.length === 0) {
        setShowEmptyScreen(true);
      } else {
        setShowEmptyScreen(false);
      }
      setShowLoadingScreen(false);
      setShowErrorScreen(false);
    },
    onError: error => {
      console.error(error, 'error from /api/profile/user-packages');
      setShowErrorScreen(true);
      setShowEmptyScreen(false);
      setShowLoadingScreen(false);
    },
  });

  useFocusEffect(
    useCallback(() => {
      reloadPackages();
    }, []),
  );

  if (showLoadingScreen) {
    return <LoadingPackagesScreen />;
  }

  if (showErrorScreen) {
    return (
      <ErrorScreen
        loadingScreen={loadingPackages}
        refresh={reloadPackages}
        marginTop={150}
      />
    );
  }

  if (showEmptyScreen) {
    return (
      <ScrollView
        style={{backgroundColor: '#F8F8F9'}}
        refreshControl={
          <RefreshControl
            refreshing={loadingPackages}
            onRefresh={reloadPackages}
            progressBackgroundColor={'white'}
            colors={['#3875F6', '']}
          />
        }>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: window.height - 200,
          }}>
          <NotifyIcon />
          <Text style={notificationStyles.emptyNotificationText}>
            {t("OOOPS! It's Empty")}
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{backgroundColor: '#F8F8F9'}}
      refreshControl={
        <RefreshControl
          refreshing={loadingPackages}
          onRefresh={reloadPackages}
          progressBackgroundColor={'white'}
          colors={['#3875F6', '']}
        />
      }>
      {packages.length > 0 &&
        packages?.map((pkg: any) => {
          return <PackageItem data={pkg} />;
        })}
    </ScrollView>
  );
}
