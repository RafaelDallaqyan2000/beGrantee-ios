import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DropUpDownIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={6}
    fill="none"
    {...props}>
    <Path
      stroke="#8EAEFD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 5 5 1 1 5"
    />
  </Svg>
);
export default DropUpDownIcon;
