import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type CloseIconType = {
  width?: number | undefined,
  height?: number | undefined,
  fill?: string
}
export const CloseIcon = ({width=13, height=13, fill='#000'}: CloseIconType, props: any) => (
  <Svg
    {...props}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000">
    <Path
      fill={fill}
      d="M12.945 12.149a.47.47 0 1 1-.663.662L6.988 7.518l-5.293 5.293a.468.468 0 0 1-.663-.662l5.293-5.294L1.032 1.56a.469.469 0 0 1 .663-.662L6.988 6.19 12.282.9a.468.468 0 0 1 .663.662L7.652 6.855l5.293 5.293Z"
    />
  </Svg>
);
