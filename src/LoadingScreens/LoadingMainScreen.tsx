import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
export const LoadingMainScreen = (props: any) => (
  <ScrollView style={{backgroundColor: '#FFF'}}>
    <ContentLoader
      speed={1}
      width={400}
      height={800}
      viewBox="0 0 400 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="40" y="39" rx="19" ry="19" width="38" height="38" />
      <Rect x="86" y="47" rx="6" ry="6" width="171" height="22" />
      <Rect x="370" y="47" rx="6" ry="6" width="159" height="22" />
      <Rect x="324" y="39" rx="19" ry="19" width="38" height="38" />
      <Rect x="32" y="149" rx="6" ry="6" width="79" height="28" />
      <Rect x="299" y="583" rx="6" ry="6" width="37" height="18" />
      <Rect x="39" y="574" rx="6" ry="6" width="35" height="35" />
      <Rect x="40" y="398" rx="6" ry="6" width={`${windowWidth - 70}`} height="36" />
      <Rect x="40" y="101" rx="6" ry="6" width="76" height="18" />
      <Rect x="83" y="361" rx="6" ry="6" width="75" height="28" />
      <Rect x="159" y="197" rx="6" ry="6" width="34" height="18" />
      <Rect x="302" y="366" rx="6" ry="6" width="34" height="18" />
      <Rect x="310" y="197" rx="6" ry="6" width="49" height="18" />
      <Rect x="83" y="578" rx="6" ry="6" width="168" height="28" />
      <Rect x="32" y="189" rx="6" ry="6" width="38" height="34" />
      <Rect x="40" y="615" rx="6" ry="6" width={`${windowWidth - 70}`} height="54" />
      <Rect x="90" y="197" rx="6" ry="6" width="37" height="18" />
      <Rect x="325" y="101" rx="6" ry="6" width="84" height="18" />
      <Rect x="225" y="197" rx="6" ry="6" width="53" height="18" />
      <Rect x="193" y="101" rx="6" ry="6" width="105" height="18" />
    </ContentLoader>
  </ScrollView>
);
