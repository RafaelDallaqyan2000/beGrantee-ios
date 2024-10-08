import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {StackNavigatorParamList} from '../../navigation/NavigationScreens';
import {
  Dimensions,
  Image,
  RefreshControl, SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";
import {ServiceDetailsBody} from './Components';
import {serviceScreenStyle} from './serviceScreenStyle';
import {HOST, getServiceDetailsByCompanyId} from '../../services';
import {useQuery} from '@tanstack/react-query';
import {QueryRoute} from '../../react-query/query-routes';
import {AuthContext} from '../../../App';
import {connect} from 'react-redux';
import {handleChange} from '../../store';
import {MoreLessBtn} from './Components/MoreLessBtn/MoreLessBtn';
import {LoadingServiceScreen} from '../../LoadingScreens';
// import {ErrorScreen} from '../../components';

interface RouteProps extends RouteProp<StackNavigatorParamList, 'Service'> {}

export interface ServiceDetails {
  data: {
    serviceName: string;
    logo: React.ReactNode;
    pricing: string;
    details: string;
    companyName: string;
    coverPhoto: string;
    category: string;
  };
  refetch: any;
  isLoading: boolean;
}

const window = Dimensions.get('window');

interface ServiceTypes {
  handleChange: (showMoreInServiceScreen2: string, b: any) => boolean;
  showMoreInServiceScreen: boolean;
  serviceHTMLContainerHeight: number;
}

function ServiceScreenContainer({
  handleChange,
  showMoreInServiceScreen,
  serviceHTMLContainerHeight,
}: ServiceTypes) {
  const [element, setElement] = useState(1);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const ref = useRef(null);
  const route = useRoute<RouteProps>();
  const {token} = useContext(AuthContext);

  const service = route.params.service;
  const {companyId} = service;

  const {
    data: serviceDetailsData,
    refetch: refetchServiceDetails,
    isLoading: loadingService,
  }: ServiceDetails = useQuery({
    initialData: {},
    queryKey: [QueryRoute.serviceDetails, companyId],
    queryFn: () =>
      getServiceDetailsByCompanyId({
        companyId,
        token,
      }),
    onSuccess: data => {
      handleChange('detailsInfo', data?.details ?? '');
      handleChange('pricingInfo', data?.pricing ?? '');
      setLoadingScreen(false);
    },
    onError: error => {
      console.log(error, 'api error in getServiceDetailsByCompanyId');
      setShowErrorScreen(true);
      setLoadingScreen(false);
    },
  });

  const checkShowMoreBtn: any = {
    '1':
      serviceDetailsData.pricing &&
      window.height - 405 < serviceHTMLContainerHeight,
    '2':
      serviceDetailsData.details &&
      window.height - 500 < serviceHTMLContainerHeight,
  };

  const showMoreButton = checkShowMoreBtn[element];

  useFocusEffect(
    useCallback(() => {
      refetchServiceDetails();
      setLoadingScreen(true);
      setElement(1);
    }, []),
  );

  useEffect(() => {
    handleChange('showMoreInServiceScreen', true);
  }, [companyId]);

  const handleClickShowMoreButton = () => {
    handleChange('showMoreInServiceScreen', !showMoreInServiceScreen);
    ref.current?.scrollTo({y: 0});
  };

  if (loadingScreen) {
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <LoadingServiceScreen />
      </ScrollView>
    );
  }

  // if (showErrorScreen) {
  //   return <ErrorScreen marginTop={150} />;
  // }

  return (
    <SafeAreaView style={serviceScreenStyle.screen}>
      <ScrollView
        scrollEnabled={false}
        style={serviceScreenStyle.topScreen}
        refreshControl={
          <RefreshControl
            refreshing={loadingService}
            onRefresh={refetchServiceDetails}
            progressBackgroundColor={'#FFF'}
            colors={['#3875F6', '']}
          />
        }>
        <Image
          style={{backgroundColor: '#7C819E'}}
          source={{
            height: 300,
            uri: HOST + serviceDetailsData?.coverPhoto,
          }}
        />
        {serviceDetailsData?.logo ? (
          <Image
            style={serviceScreenStyle.companyLogo}
            source={{
              height: 46,
              width: 46,
              uri: HOST + serviceDetailsData?.logo,
            }}
          />
        ) : (
          <Text style={serviceScreenStyle.companyLogoAlt}>
            {serviceDetailsData?.serviceName &&
              serviceDetailsData?.serviceName[0]}
          </Text>
        )}
      </ScrollView>

      <View
        style={[
          serviceScreenStyle.container,
          {
            height: window.height + (showMoreInServiceScreen ? -122 : 60),
          },
        ]}>
        <View style={serviceScreenStyle.titleContainer}>
          <Text style={serviceScreenStyle.title}>
            {serviceDetailsData?.serviceName}
          </Text>
          <Text style={serviceScreenStyle.productName}>
            {serviceDetailsData?.category}
          </Text>
        </View>
        <ServiceDetailsBody
          containerRef={ref}
          subpage={element}
          service={service}
          onSubpageChange={setElement}
          serviceDetailsData={serviceDetailsData}
        />
      </View>

      {showMoreButton ? (
        <MoreLessBtn handleBtnClick={handleClickShowMoreButton} />
      ) : null}
    </SafeAreaView>
  );
}

const mapStateToProps = (state: any) => {
  return {
    showMoreInServiceScreen: state.reducer.showMoreInServiceScreen,
    serviceHTMLContainerHeight: state.reducer.serviceHTMLContainerHeight ?? 0,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleChange: (key: string, value: any) =>
      dispatch(handleChange(key, value)),
  };
};

export const ServiceScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceScreenContainer);
