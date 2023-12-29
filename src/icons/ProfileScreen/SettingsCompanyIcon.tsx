import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SettingsCompanyIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#7C819E"
      d="M15 12.5h-1.667v1.667H15m0-5h-1.667v1.666H15m1.666 5H10v-1.666h1.666V12.5H10v-1.667h1.666V9.167H10V7.5h6.666M8.333 5.833H6.666V4.167h1.667m0 5H6.666V7.5h1.667m0 5H6.666v-1.667h1.667m0 5H6.666v-1.666h1.667M5 5.833H3.333V4.167H5m0 5H3.333V7.5H5m0 5H3.333v-1.667H5m0 5H3.333v-1.666H5m5-8.334V2.5H1.667v15h16.666V5.833H10Z"
    />
  </Svg>
);
