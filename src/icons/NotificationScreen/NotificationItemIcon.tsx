import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotificationItemIcon = (props: any) => {
  const {color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <Path
        fill={color}
        stroke="#fff"
        strokeWidth={2}
        d="m10.08 11.892.63 1.479 1.048-1.22L20.87 1.555c1.202.401 2.176 1.706 2.13 3.042A69.723 69.723 0 0 1 20.827 19c-.195.727-.717 1.48-1.437 2.067-.722.587-1.548.93-2.265.957-4.746.151-9.354-.15-13.767-.881-.598-.104-1.201-.488-1.66-1.076-.458-.586-.715-1.304-.698-1.98.158-4.596.767-9.085 1.858-13.709.177-.717.66-1.476 1.333-2.08a4.406 4.406 0 0 1 1.425-.88l4.463 10.473ZM7.68 1.157a71.58 71.58 0 0 1 10.806.101L11.29 9.629 7.68 1.157Z"
      />
    </Svg>
  );
};
export default NotificationItemIcon;
