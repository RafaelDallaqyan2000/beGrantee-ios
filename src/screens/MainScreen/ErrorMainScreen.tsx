import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ErrorImage from '../../images/ErrorImage';
import React from 'react';

type ErrorScreenType = {
  loadingScreen?: any;
  refresh?: () => any;
  marginTop?: number;
};
export function ErrorMainScreen({
  loadingScreen,
  refresh,
  marginTop = 150,
}: ErrorScreenType) {
  return (
    <ScrollView
      style={errorStyle.errorScreen}
      refreshControl={
        <RefreshControl
          refreshing={loadingScreen}
          onRefresh={refresh}
          progressBackgroundColor={'#FFF'}
          colors={['#3875F6', '']}
        />
      }>
      <View style={[errorStyle.errorContainer, {marginTop}]}>
        <ErrorImage />
      </View>
    </ScrollView>
  );
}

const window = Dimensions.get('window');

const errorStyle = StyleSheet.create({
  errorScreen: {
    backgroundColor: '#FFF',
  },
  errorContainer: {
    height: window.height - 280,
    alignItems: 'center',
    marginTop: 104,
  },
  ifNotNotification: {
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.48,
    color: 'rgba(0, 0, 0, 0.80)',
    backgroundColor: '#FFF',
    paddingTop: 26,
    width: window.width,
    textAlign: 'center',
    marginBottom: 69,
  },
});
