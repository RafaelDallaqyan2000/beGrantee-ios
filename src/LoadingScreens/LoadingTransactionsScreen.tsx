import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const LoadingTransactionsScreen = (props: any) => {
  console.log(windowWidth);
  return (
    <ContentLoader
      speed={1}
      width={500}
      height={812}
      viewBox="0 0 500 812"
      backgroundColor="#f1efef"
      foregroundColor="#e7e5e5"
      {...props}>
      <Rect x={`${(windowWidth - 145) / 2}`} y="30" rx="6" ry="6" width="145" height="32" />
      <Rect x="30" y="108" rx="6" ry="6" width="42" height="18" />
      <Rect x={`${windowWidth - 154}`} y="82" rx="6" ry="6" width="124" height="18" />
      <Rect
        x={`${windowWidth - 92}`}
        y="108"
        rx="6"
        ry="6"
        width="62"
        height="18"
      />
      <Rect x="30" y="82" rx="6" ry="6" width="79" height="18" />
      <Rect x="30" y="160" rx="6" ry="6" width={`${windowWidth - 60}`} height="1" />
      <Rect x={`${windowWidth - 78}`} y="197" rx="6" ry="6" width="48" height="18" />
      <Rect x={`${windowWidth - 71}`} y="169" rx="6" ry="6" width="41" height="18" />
      <Rect x="30" y="250" rx="6" ry="6" width="32" height="18" />
      <Rect x={`${windowWidth - 88}`} y="276" rx="6" ry="6" width="58" height="18" />
      <Rect x="30" y="169" rx="6" ry="6" width="75" height="18" />
      <Rect x={`${windowWidth - 155}`} y="134" rx="6" ry="6" width="125" height="18" />
      <Rect x="31" y="134" rx="6" ry="6" width="47" height="18" />
      <Rect x="30" y="489" rx="6" ry="6" width={`${windowWidth - 60}`} height="1" />
      <Rect x="30" y="302" rx="6" ry="6" width="47" height="18" />
      <Rect x={`${windowWidth - 202}`} y="302" rx="6" ry="6" width="172" height="18" />
      <Rect x="30" y="328" rx="6" ry="6" width={`${windowWidth - 60}`} height="1" />
      <Rect x="30" y="276" rx="6" ry="6" width="42" height="18" />
      <Rect x={`${windowWidth - 151}`} y="250" rx="6" ry="6" width="121" height="18" />
      <Rect x="30" y="411" rx="6" ry="6" width="32" height="18" />
      <Rect x={`${windowWidth - 71}`} y="337" rx="6" ry="6" width="41" height="18" />
      <Rect x={`${windowWidth - 78}`} y="363" rx="6" ry="6" width="48" height="18" />
      <Rect x="30" y="337" rx="6" ry="6" width="42" height="18" />
      <Rect x="30" y="437" rx="6" ry="6" width="42" height="18" />
      <Rect x="30" y="498" rx="6" ry="6" width="75" height="18" />
      <Rect x={`${windowWidth - 71}`} y="498" rx="6" ry="6" width="41" height="18" />
      <Rect x={`${windowWidth - 78}`} y="524" rx="6" ry="6" width="48" height="18" />
      <Rect x="30" y="572" rx="6" ry="6" width="32" height="18" />
      <Rect x="30" y="598" rx="6" ry="6" width="42" height="18" />
      <Rect x="30" y="624" rx="6" ry="6" width="47" height="18" />
      <Rect x={`${windowWidth - 202}`} y="463" rx="6" ry="6" width="172" height="18" />
      <Rect x={`${windowWidth - 88}`} y="437" rx="6" ry="6" width="58" height="18" />
      <Rect x={`${windowWidth - 151}`} y="411" rx="6" ry="6" width="121" height="18" />
      <Rect x="30" y="463" rx="6" ry="6" width="47" height="18" />
      <Rect x={`${windowWidth - 154}`} y="572" rx="6" ry="6" width="124" height="18" />
      <Rect x={`${windowWidth - 99}`} y="598" rx="6" ry="6" width="69" height="18" />
      <Rect x="30" y="650" rx="6" ry="6" width={`${windowWidth - 60}`} height="1" />
      <Rect x={`${windowWidth - 160}`} y="624" rx="6" ry="6" width="130" height="18" />
      <Rect x="30" y="659" rx="6" ry="6" width="75" height="18" />
      <Rect x={`${windowWidth - 63}`} y="659" rx="6" ry="6" width="33" height="18" />
      <Rect x={`${windowWidth - 78}`} y="685" rx="6" ry="6" width="48" height="18" />
    </ContentLoader>
  );
};
