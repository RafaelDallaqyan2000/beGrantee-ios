import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {CompaniesItem} from './CompaniesItem';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../../App';
import {getCompanies} from '../../services';
import {notificationStyles} from '../NotificationScreen/notificationStyles';
import {NotifyIcon} from '../../icons';
import {LoadingCompaniesScreen} from '../../LoadingScreens';
import {ErrorScreen} from '../../components';
import {window } from "../index.ts";
import { useTranslation } from 'react-i18next';


export function CompaniesScreen() {
  const {token}: any = useContext(AuthContext);
  const [loadingCompanyScreen, setLoadingCompanyScreen] = useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const {t} = useTranslation();

  const {
    data: companies,
    isLoading: loadingCompanies,
    refetch: reloadCompanies,
  } = useQuery({
    queryKey: [QueryRoute.userCompanies],
    initialData: [],
    queryFn: () => getCompanies({token}),
    onSuccess: (data: any) => {
      if (data.length === 0) {
        setShowEmptyScreen(true);
      } else {
        setShowEmptyScreen(false);
      }
      setLoadingCompanyScreen(false);
      setShowErrorScreen(false);
    },
    onError: error => {
      console.log(error, 'error from /api/profile/user-companies');
      setShowErrorScreen(true);
      setShowEmptyScreen(false);
      setLoadingCompanyScreen(false);
    },
  });


  if (loadingCompanyScreen) {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <LoadingCompaniesScreen />
      </ScrollView>
    );
  }

  if (showErrorScreen) {
    return (
      <ErrorScreen
        loadingScreen={loadingCompanies}
        refresh={reloadCompanies}
        marginTop={150}
      />
    );
  }

  if (showEmptyScreen) {
    return (
      <ScrollView style={{backgroundColor: '#F8F8F9'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: window.height - 200,
          }}>
          <NotifyIcon />
          <Text style={notificationStyles.emptyNotificationText}>
            {("OOOPS! It's Empty")}
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
          refreshing={loadingCompanies}
          onRefresh={reloadCompanies}
          progressBackgroundColor={'white'}
          colors={['#3875F6', '']}
        />
      }>
      {companies.length &&
        companies?.map((company: any) => {
          return <CompaniesItem company={company} />;
        })}
    </ScrollView>
  );
}
