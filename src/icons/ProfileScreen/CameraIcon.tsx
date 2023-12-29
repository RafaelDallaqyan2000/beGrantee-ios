import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export const CameraIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Rect width={18} height={18} x={1} y={1} fill="#2F2F2F" rx={9} />
    <Path
      fill="#fff"
      d="M10 12.444c.563 0 1.04-.194 1.435-.583.393-.389.59-.861.59-1.417 0-.555-.197-1.027-.59-1.416A1.966 1.966 0 0 0 10 8.444c-.563 0-1.04.195-1.435.584-.393.389-.59.86-.59 1.416 0 .556.197 1.028.59 1.417.394.39.873.583 1.435.583ZM6.4 14a.872.872 0 0 1-.635-.26.85.85 0 0 1-.265-.629V7.778a.85.85 0 0 1 .265-.628.871.871 0 0 1 .635-.261h1.417L8.65 6h2.7l.832.889H13.6c.248 0 .46.087.636.261a.85.85 0 0 1 .264.628v5.333a.852.852 0 0 1-.264.628.873.873 0 0 1-.636.261H6.4Z"
    />
    <Rect
      width={18}
      height={18}
      x={1}
      y={1}
      stroke="#fff"
      strokeWidth={2}
      rx={9}
    />
  </Svg>
);
