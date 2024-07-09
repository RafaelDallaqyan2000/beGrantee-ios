import React, {useContext, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {PackageCard, ServiceCard, ServiceTypeList, UpdateAppWindow} from '../../components';
import {ServiceModel, ServiceType} from '../../models/services';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {mainScreenStyles} from './mainScreenStyles';
import {AuthContext} from '../../../App';
import {getAllCategories, getAllServices} from '../../services';
import {useSelector} from 'react-redux';
import {ErrorMainScreen} from './ErrorMainScreen';
import {LoadingMainScreen} from '../../LoadingScreens';
import {window} from '../index';
import { NotifyIcon } from '../../icons';
import { notificationStyles } from '../NotificationScreen/notificationStyles';
import { useTranslation } from 'react-i18next';

type EmptyMainType = {
  refreshScreen: any;
  isLoadingScreen: boolean;
}

export function EmptyMainScreen({refreshScreen, isLoadingScreen}: EmptyMainType) {
  // #region States
  const [selectedServiceType, setSelectedServiceType] =
    useState<ServiceType | null>({id: 0});

  const navigation: any = useNavigation();
  //#endregion
  let {token}: any = useContext(AuthContext);
  const searchText = useSelector((store: any) => store.reducer?.searchText);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [errorScreen, setErrorScreen] = useState(false);
  const [emptyCube, setEmptyCube] = useState(false);
  const {t} = useTranslation();

  const {data: allCategories, refetch: refetchServiceTypes} = useQuery({
    queryKey: [searchText],
    initialData: [{title: 'Sport'}],
    queryFn: () => getAllCategories({token, searchText}),
    onSuccess: () => setLoadingScreen(false),
    onError: error => {
      console.log(error, 'error from /categories');
      setErrorScreen(true);
    },
  });

  const {data: services, refetch: refetchServices} = useQuery({
    initialData: [],
    queryKey: [selectedServiceType, searchText],
    queryFn: () =>
      getAllServices({
        token,
        categoryId: selectedServiceType?.id ?? 0,
        searchText,
      }),
    onSuccess: e => {
      if (e.length) {
        setEmptyCube(false);
      } else {
        setEmptyCube(true);
      }
    },
    onError: error => {
      console.error(
        error,
        'error from /category/${categoryId}/services?searchText=${searchText}',
      );
      setEmptyCube(false);
      setErrorScreen(true);
    },
  });
  //#endregion

  useEffect(() => {
    refetchServiceTypes();
    refetchServices();
  }, [selectedServiceType]);

  const handleTypeSelect = (type: ServiceType | null) => {
    setSelectedServiceType(type);
  };

  const handleServiceOpen = (service: ServiceModel) => {
    return navigation.navigate('Service' as never, {service});
  };
  //#endregion

  if (loadingScreen) {
    return <LoadingMainScreen />;
  } else if (errorScreen) {
    return <ErrorMainScreen />;
  } else if (emptyCube) {
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
           {t("OOOPS! It's Empty")}
          </Text>
        </View>
        <UpdateAppWindow />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{backgroundColor: '#FFF'}}
      refreshControl={
        <RefreshControl
          refreshing={isLoadingScreen}
          onRefresh={refreshScreen}
          progressBackgroundColor={'white'}
          colors={['#3875F6', '']}
        />
      }>
      <View style={{alignItems: 'center', marginTop: 13}}>
        <PackageCard data={{}} isEmpty={true} />
      </View>
      <View style={mainScreenStyles.categorysAndServiceCardsContainer}>
        <ServiceTypeList
          data={allCategories}
          onTypeSelect={handleTypeSelect}
          selectedType={selectedServiceType}
        />

        {services.length > 0 &&
          services?.map((s: ServiceModel) => (
            <ServiceCard key={s?.id} onPress={handleServiceOpen} data={s} />
          ))}
      </View>
      <UpdateAppWindow />
    </ScrollView>
  );
}
