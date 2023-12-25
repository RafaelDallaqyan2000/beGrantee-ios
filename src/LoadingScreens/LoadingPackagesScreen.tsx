import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {ScrollView} from 'react-native';

export const LoadingPackagesScreen = (props: any) => (
  <ScrollView style={{backgroundColor: '#FFF'}}>
    <ContentLoader
      speed={2}
      width={400}
      height={800}
      viewBox="0 0 400 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="110" y="58" rx="6" ry="6" width="35" height="35" />
      <Rect x="150" y="56" rx="6" ry="6" width="113" height="36" />
      <Rect x="185" y="108" rx="6" ry="6" width="162" height="18" />
      <Rect x="27" y="108" rx="6" ry="6" width="32" height="18" />
      <Rect x="306" y="134" rx="6" ry="6" width="41" height="18" />
      <Rect x="314" y="195" rx="6" ry="6" width="33" height="18" />
      <Rect x="26" y="195" rx="6" ry="6" width="125" height="18" />
      <Rect x="26" y="186" rx="6" ry="6" width="321" height="1" />
      <Rect x="26" y="134" rx="6" ry="6" width="42" height="18" />
      <Rect x="26" y="160" rx="6" ry="6" width="68" height="18" />
      <Rect x="84" y="285" rx="6" ry="6" width="35" height="35" />
      <Rect x="292" y="160" rx="6" ry="6" width="55" height="18" />
      <Rect x="27" y="335" rx="6" ry="6" width="32" height="18" />
      <Rect x="125" y="283" rx="6" ry="6" width="163" height="36" />
      <Rect x="185" y="335" rx="6" ry="6" width="162" height="18" />
      <Rect x="26" y="361" rx="6" ry="6" width="42" height="18" />
      <Rect x="26" y="387" rx="6" ry="6" width="68" height="18" />
      <Rect x="26" y="422" rx="6" ry="6" width="125" height="18" />
      <Rect x="26" y="413" rx="6" ry="6" width="321" height="1" />
      <Rect x="282" y="361" rx="6" ry="6" width="65" height="18" />
      <Rect x="292" y="387" rx="6" ry="6" width="55" height="18" />
      <Rect x="314" y="422" rx="6" ry="6" width="33" height="18" />
      <Rect x="117" y="512" rx="6" ry="6" width="35" height="35" />
      <Rect x="158" y="510" rx="6" ry="6" width="97" height="36" />
      <Rect x="27" y="262" rx="6" ry="6" width="32" height="18" />
      <Rect x="27" y="562" rx="6" ry="6" width="32" height="18" />
      <Rect x="26" y="588" rx="6" ry="6" width="42" height="18" />
      <Rect x="26" y="614" rx="6" ry="6" width="68" height="18" />
      <Rect x="26" y="640" rx="6" ry="6" width="321" height="1" />
      <Rect x="26" y="649" rx="6" ry="6" width="125" height="18" />
      <Rect x="185" y="562" rx="6" ry="6" width="162" height="18" />
      <Rect x="273" y="588" rx="6" ry="6" width="74" height="18" />
      <Rect x="292" y="614" rx="6" ry="6" width="55" height="18" />
      <Rect x="314" y="649" rx="6" ry="6" width="33" height="18" />
    </ContentLoader>
  </ScrollView>
);
