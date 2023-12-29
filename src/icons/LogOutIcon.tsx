import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const LogOutIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#FF5F5F"
      d="M14.167 6.667 13 7.833l1.333 1.334H7.5v1.666h6.833L13 12.167l1.167 1.166L17.5 10l-3.333-3.333Zm-10-2.5H10V2.5H4.167C3.25 2.5 2.5 3.25 2.5 4.167v11.666c0 .917.75 1.667 1.667 1.667H10v-1.667H4.167V4.167Z"
    />
  </Svg>
);
