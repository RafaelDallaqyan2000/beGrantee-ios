import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LanguageIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#7C819E"
      d="m15.417 8.334 3.666 9.166h-1.795L16.287 15h-3.409l-.999 2.5h-1.795l3.666-9.166h1.667ZM8.333 1.667v1.667h5V5h-1.64a15.186 15.186 0 0 1-3.016 5.251 12.394 12.394 0 0 0 1.946 1.423l-.625 1.565A14.18 14.18 0 0 1 7.5 11.438a13.897 13.897 0 0 1-5.167 2.957l-.447-1.608a12.25 12.25 0 0 0 4.44-2.535 15.065 15.065 0 0 1-2.353-3.585h1.866A13.36 13.36 0 0 0 7.5 9.064a13.47 13.47 0 0 0 2.425-4.063H1.667V3.333h5V1.667h1.666Zm6.25 9.07-1.039 2.597h2.077l-1.038-2.596Z"
    />
  </Svg>
);
