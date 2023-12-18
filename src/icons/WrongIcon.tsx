import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const WrongIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#FF9292"
      d="M7 8.303a.677.677 0 0 1-.677-.676v-2.03a.677.677 0 0 1 1.354 0v2.03A.677.677 0 0 1 7 8.303ZM5.985 9.995a1.015 1.015 0 1 1 2.03 0 1.015 1.015 0 0 1-2.03 0Z"
    />
    <Path
      fill="#FF9292"
      d="M5.803 1.007a1.353 1.353 0 0 1 2.394 0l5.645 10.726a1.353 1.353 0 0 1-1.197 1.983H1.355a1.353 1.353 0 0 1-1.197-1.983L5.803 1.007Zm6.842 11.356L7 1.637 1.355 12.363h11.29Z"
    />
  </Svg>
);
export default WrongIcon;
