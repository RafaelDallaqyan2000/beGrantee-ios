import {NavigationBar} from './NavigationBar';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {serviceDetailsBodyStyle} from './serviceDetailsBodyStyle';
import {ConvertHtmlCode} from '../../../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {ContactInfo} from '../ContactInfo';
import {useDispatch, useSelector} from 'react-redux';
import EmptyServiceScreenInfo from '../../../../images/EmptyServiceScreenInfo';
import {handleChange} from '../../../../store';
import { useTranslation } from 'react-i18next';

enum NavItemType {
  PricingId = 1,
  DetailsId,
  HouItWorks,
}

interface ServiceDetailsType {
  data?: any;
  subpage?: number;
  onSubpageChange?: any;
  serviceDetailsData?: any;
  refetchServiceDetails?: any;
  service?: any;
  containerRef?: any;
}



export function ServiceDetailsBody({
  subpage,
  onSubpageChange,
  serviceDetailsData,
  containerRef,
}: ServiceDetailsType) {
  const [info, setInfo] = useState<string>('');
  const detailsInfo = useSelector((store: any) => store.reducer?.detailsInfo);
  const pricingInfo = useSelector((store: any) => store.reducer?.pricingInfo);
  const {t} = useTranslation();

  const navBarItems = [
    {id: 1, text: t('Pricing')},
    {id: 2, text: t('Details')},
    {id: 3, text: t('How it works')},
  ];

  const showMore = useSelector(
    (store: any) => store.reducer?.showMoreInServiceScreen,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (subpage === NavItemType.PricingId) {
      setInfo(pricingInfo);
    }
    if (subpage === NavItemType.DetailsId) {
      setInfo(detailsInfo);
    }
  }, [pricingInfo, detailsInfo]);

  useEffect(() => {
    if (subpage === NavItemType.PricingId) {
      setInfo(pricingInfo);
    }
    if (subpage === NavItemType.DetailsId) {
      setInfo(detailsInfo);
    }
    if (subpage === NavItemType.HouItWorks) {
      setInfo(
        `<ol>
          <li>Check the packages you have.</li>
          <li>Select the service you want to buy.</li>
          <li>Scan the service's QR code with your application.</li>
          <li>Set the amount you want to pay with the application.</li>
          <li>Enjoy.</li>
        </ol>`,
      );
    }
  }, [subpage]);

  const handleLayout = (event: any) => {
    dispatch(
      handleChange(
        'serviceHTMLContainerHeight',
        event?.nativeEvent?.layout?.height,
      ),
    );
  };
  const handleNavbarElementClick = (id: any) => {
    onSubpageChange(id);
    containerRef.current?.scrollTo({y: 0});
  };

  let emptyInfo = (
    <View style={serviceDetailsBodyStyle.emptyInfoContainer}>
      <EmptyServiceScreenInfo />
      <Text style={serviceDetailsBodyStyle.emptyInfoText}>
        {t("OOOPS! It's Empty")}
      </Text>
    </View>
  );

  return (
    <View style={serviceDetailsBodyStyle.bodyContainer}>
      <NavigationBar
        items={navBarItems}
        state={subpage}
        callback={handleNavbarElementClick}
      />
      <ScrollView scrollEnabled={!showMore} ref={containerRef}>
        {subpage !== NavItemType.DetailsId ? (
          info?.length <= 0 ? (
            emptyInfo
          ) : (
            <ConvertHtmlCode
              getLayout={handleLayout}
              containerStyle={{paddingBottom: 20}}
              data={info}
            />
          )
        ) : !serviceDetailsData.address &&
          !serviceDetailsData.phoneNumber &&
          !serviceDetailsData.webSiteUrl &&
          info?.length <= 0 ? (
          emptyInfo
        ) : (
          <>
            <ContactInfo data={serviceDetailsData} />
            <ConvertHtmlCode
              getLayout={handleLayout}
              containerStyle={{paddingBottom: 20}}
              data={info}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
}
