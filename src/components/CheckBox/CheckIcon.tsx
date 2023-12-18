import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CheckIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.667 3.5 5.251 9.917 2.334 7"
    />
  </Svg>
);
export default CheckIcon;
