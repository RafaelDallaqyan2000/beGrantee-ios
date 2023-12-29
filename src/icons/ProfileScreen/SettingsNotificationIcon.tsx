import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SettingsNotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      stroke="#7C819E"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.017 2.425c-2.758 0-5 2.241-5 5v2.408c0 .508-.216 1.284-.475 1.717l-.958 1.591c-.592.984-.183 2.075.9 2.442 3.592 1.2 7.467 1.2 11.058 0a1.668 1.668 0 0 0 .9-2.441l-.958-1.592c-.25-.434-.467-1.209-.467-1.717V7.425c0-2.75-2.25-5-5-5Z"
    />
    <Path
      stroke="#7C819E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.558 2.666a5.628 5.628 0 0 0-3.083 0 1.654 1.654 0 0 1 1.542-1.05c.7 0 1.3.434 1.541 1.05Z"
    />
    <Path
      stroke="#7C819E"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.516 15.884c0 1.375-1.125 2.5-2.5 2.5a2.509 2.509 0 0 1-1.766-.733 2.509 2.509 0 0 1-.734-1.767"
    />
  </Svg>
);
