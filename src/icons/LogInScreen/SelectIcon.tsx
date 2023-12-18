import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SelectIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={5}
    fill="none"
    {...props}>
    <Path
      fill={props.error ? '#FF9292' : '#7C819E'}
      d="m2.374 1.707 1.74 1.74a2.667 2.667 0 0 0 3.771 0l1.741-1.74C10.256 1.077 9.81 0 8.92 0H3.081c-.891 0-1.337 1.077-.707 1.707Z"
    />
  </Svg>
);
export default SelectIcon;
