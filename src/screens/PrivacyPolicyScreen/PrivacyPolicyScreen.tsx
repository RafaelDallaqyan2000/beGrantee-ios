import {ScrollView, View} from 'react-native';
import React from 'react';
import {ConvertHtmlCode} from '../../components';
import {fixedData} from '../../data';

export function PrivacyPolicyScreen() {
  return (
    <>
      <View style={{position: 'relative'}}>
        <ScrollView style={{backgroundColor: '#FFF', padding: 30}}>
          {/*@ts-ignore*/}
          <ConvertHtmlCode
            data={fixedData.privacyPolicyData}
            textStyle={{color: '#2F2F2F'}}
            mb={100}
          />
        </ScrollView>
      </View>
    </>
  );
}
