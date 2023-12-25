import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ErrorImage from '../../images/ErrorImage';
import React from 'react';

type ErrorScreenType = {
  loadingScreen?: any;
  refresh?: () => any;
  marginTop?: number;
};
export function ErrorScreen({
  loadingScreen,
  refresh,
  marginTop = 105,
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
        <Text style={errorStyle.errorText}>
          An error occurred, {'\n'} please try again
        </Text>
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
    // height: window.height,
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

  errorText: {
    color: '#616062',
    fontFamily: 'NotoSansArmenian-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: 0.48,
  },
});
