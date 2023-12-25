import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {PackageList, ServiceCard, ServiceTypeList} from '../../components';
import {PackageModel} from '../../models/packages';
import {ServiceModel, ServiceType} from '../../models/services';
import {
  getServicesByPackageId,
  getServiceTypesByPackageAndCategoryId,
  getPackages,
} from '../../services';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {mainScreenStyles} from './mainScreenStyles';
import {AuthContext} from '../../../App';
import {useDispatch, useSelector} from 'react-redux';
import {handleChange} from '../../store';
import {EmptyMainScreen} from './EmptyMainScreen';
import {LoadingMainScreen} from '../../LoadingScreens';
import {ErrorMainScreen} from './ErrorMainScreen';
import {window} from '../index';
import {notificationStyles} from '../NotificationScreen/notificationStyles';
import {NotifyIcon} from '../../icons';

export function MainScreen() {
  // #region States
  const [selectedPackage, setSelectedPackage] = useState<PackageModel | null>(
    null,
  );
  const [selectedServiceType, setSelectedServiceType] =
    useState<ServiceType | null>(null);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [categories, setCategories] = useState(true);
  const [showEmptyScreen, setShowEmptyScreen] = useState(false);
  const [emptyBox, setEmptyBox] = useState(false);
  const [errorScreen, setErrorScreen] = useState(false);
  const navigation = useNavigation();
  const carouselRef = useRef();
  //#endregion
  let {token}: any = useContext(AuthContext);

  const searchText = useSelector((store: any) => store.reducer?.searchText);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(handleChange('screenTitle', 'mainScreen'));
  }, []);
  // #region Services

  const {
    data: {cards, categories: initialCategories, services: initialServices},
    isInitialLoading: loadingPackages,
    refetch: refetchPackages,
  } = useQuery({
    queryKey: [QueryRoute.packages, searchText],
    initialData: {
      userInitialInfo: [],
      cards: [],
      categories: [],
      services: [],
    },
    queryFn: () => getPackages(token, searchText),
    onSuccess: data => {
      carouselRef?.current?.snapToItem(0);

      if (data.cards.length > 0) {
        setSelectedPackage(data?.cards[0]);
      }
      if (
        data.cards.length + data.categories.length + data.services.length ===
        0
      ) {
        if (searchText) {
          setEmptyBox(true);
        } else {
          setEmptyBox(false);
          setShowEmptyScreen(true);
        }
      } else {
        setEmptyBox(false);
        setShowEmptyScreen(false);
      }
      setCategories(data?.categories ?? []);
      setSelectedServiceType({id: 0});
      setErrorScreen(false);
    },
    onError: error => {
      console.log(error, 'error from /api/cards');
      setErrorScreen(true);
      setShowEmptyScreen(false);
      setEmptyBox(false);
      return error;
    },
  });

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      refetchPackages();
    });
    return focusHandler;
  }, [navigation, refetchPackages]);

  const {refetch: refetchServiceTypes} = useQuery({
    queryKey: [QueryRoute.serviceTypes, selectedPackage],
    initialData: initialCategories,
    enabled: !!selectedPackage && !!initialCategories,
    queryFn: () =>
      getServicesByPackageId({packageId: selectedPackage?.id ?? 0, token}),
    onSuccess: data => setCategories(data),
    onError: error => {
      console.log(error, 'fetch error /api/card/packageId/categories');
      return error;
    },
  });

  const {
    data: services,
    isLoading: loadingServices,
    refetch: refetchServices,
  } = useQuery({
    initialData: [],
    queryKey: [QueryRoute.services, selectedServiceType],
    enabled: !!selectedPackage && !!initialServices,
    queryFn: () =>
      getServiceTypesByPackageAndCategoryId({
        cardId: selectedPackage?.id,
        categoryId: selectedServiceType?.id,
        searchText,
        token,
      }),
    onSuccess: () => setLoadingScreen(false),
    onError: (error: void) => {
      console.log(error, 'error from /api/card/category/services');
      return error;
    },
  });
  //#endregion

  // #region Methods
  useEffect(() => {
    refetchServices();
  }, [selectedPackage, selectedServiceType]);

  const handlePackageSelect = (p: PackageModel) => {
    // if (p.id !== selectedPackage?.id) {
    setSelectedServiceType({id: 0});
    setSelectedPackage(p);
    // }
  };

  const handleTypeSelect = (type: ServiceType | null) => {
    if (selectedPackage) {
      setSelectedServiceType(type);
    }
  };

  const handleServiceOpen = (service: ServiceModel) => {
    return navigation.navigate('Service' as never, {service} as never);
  };

  const refetchAll = useCallback(() => {
    refetchPackages();
    refetchServiceTypes();
    refetchServices();
  }, [refetchPackages, refetchServiceTypes, refetchServices]);

  useFocusEffect(
    useCallback(() => {
      refetchPackages();
      refetchServiceTypes();
      refetchServices();
    }, []),
  );
  //#endregion

  if (loadingScreen) {
    return <LoadingMainScreen />;
  }
  if (errorScreen) {
    return (
      <ErrorMainScreen
        loadingScreen={loadingPackages}
        refresh={refetchPackages}
      />
    );
  }
  if (showEmptyScreen) {
    return (
      <EmptyMainScreen
        loadingPackages={loadingPackages}
        refetchPackages={refetchPackages}
      />
    );
  }
  if (emptyBox) {
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
            OOOPS! It’s Empty
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{backgroundColor: 'orange'}}
      refreshControl={
        <RefreshControl
          refreshing={loadingPackages}
          onRefresh={refetchAll}
          progressBackgroundColor={'white'}
          colors={['#3875F6', '']}
        />
      }>
      <PackageList
        carouselRef={carouselRef}
        data={cards}
        onSelectPackage={handlePackageSelect}
      />
      {!!selectedPackage && (
        <View style={mainScreenStyles.categorysAndServiceCardsContainer}>
          <ServiceTypeList
            data={categories}
            onTypeSelect={handleTypeSelect}
            selectedType={selectedServiceType}
          />
          {loadingServices ? (
            <Text style={[globalStyles.title, {margin: 16}]}>Loading...</Text>
          ) : (
            services.length > 0 &&
            services?.map((s: ServiceModel) => (
              <ServiceCard key={s?.id} onPress={handleServiceOpen} data={s} />
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
}
