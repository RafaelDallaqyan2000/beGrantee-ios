import React, {Ref, useEffect, useState} from 'react';
import {PackageModel} from '../../models/packages';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {PackageCard} from '../PackageCard';
//@ts-ignore
import Carousel from 'react-native-snap-carousel';
import {useSelector} from 'react-redux';

interface PackageListProps {
  data?: PackageModel[];
  onSelectPackage: (selectedPackage: PackageModel) => void;
  carouselRef: Ref<number | null>;
}

const window = Dimensions.get('window');

export function PackageList({
  data = [],
  onSelectPackage,
  carouselRef,
}: PackageListProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const searchText = useSelector((store: any) => store.reducer?.searchText);

  const renderItem = ({item, index}: {item: PackageModel; index: number}) => {
    return <PackageCard key={index} data={item} />;
  };

  const animatedStyles = (
    index: number,
    animatedValue: any,
    carouselProps: any,
  ) => {
    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [2, 0],
        extrapolate: 'clamp',
      }),
    };
  };

  useEffect(() => {
    onSelectPackage(data[activeSlide]);
  }, [activeSlide]);

  return (
    <View
      style={[
        styles.container,
        searchText && {marginLeft: 30, marginTop: 30, gap: 10},
      ]}>
      {searchText ? (
        data &&
        data.map((item, index) => {
          return <PackageCard data={item} key={index} />;
        })
      ) : (
        <ScrollView>
          <Carousel
            ref={carouselRef}
            data={data}
            renderItem={renderItem}
            sliderWidth={window.width}
            itemWidth={285}
            layout={'default'}
            onSnapToItem={(index: number) => setActiveSlide(index)}
            slideInterpolatedStyle={animatedStyles}
            layoutCardOffset={'18'}
            enableMomentum={true}
            decelerationRate={0.9}
          />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 13,
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: 5,
    marginVertical: 0,
    backgroundColor: '#2F2F2F',
  },
});
