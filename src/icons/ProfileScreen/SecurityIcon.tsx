import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SecurityIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#7C819E"
      d="M5 6.666v-.833a5 5 0 1 1 10 0v.833h1.667a.833.833 0 0 1 .833.834v10a.833.833 0 0 1-.833.833H3.333A.833.833 0 0 1 2.5 17.5v-10a.833.833 0 0 1 .833-.834H5Zm10.833 1.667H4.167v8.333h11.666V8.333ZM9.167 13.11a1.667 1.667 0 1 1 1.666 0V15H9.167v-1.89Zm-2.5-6.444h6.666v-.833a3.333 3.333 0 0 0-6.666 0v.833Z"
    />
  </Svg>
);
