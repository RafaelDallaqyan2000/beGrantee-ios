import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const LiveChatIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#7C819E"
      d="M4.167 15v3.138l1.262-.757L9.398 15h3.935c.92 0 1.667-.748 1.667-1.667V6.667C15 5.747 14.253 5 13.333 5h-10c-.919 0-1.666.747-1.666 1.667v6.666c0 .92.747 1.667 1.666 1.667h.834Zm-.834-8.333h10v6.666H8.936l-3.103 1.862v-1.862h-2.5V6.667Z"
    />
    <Path
      fill="#7C819E"
      d="M16.667 1.667h-10C5.747 1.667 5 2.414 5 3.334h10c.92 0 1.667.747 1.667 1.666v6.667c.919 0 1.666-.748 1.666-1.667V3.334c0-.92-.747-1.667-1.666-1.667Z"
    />
  </Svg>
);
