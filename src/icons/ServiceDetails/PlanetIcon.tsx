import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
export const PlanetIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}>
    <G stroke="#7C819E" strokeWidth={0.8} clipPath="url(#a)">
      <Path
        strokeLinecap="square"
        d="M6.618 11.318a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <Path
        strokeLinecap="round"
        d="M6.618 11.318c1.334-1.212 2-2.878 2-5 0-2.12-.666-3.788-2-5-1.333 1.212-2 2.88-2 5 0 2.122.667 3.788 2 5ZM1.868 4.818h9.5m-9.5 3h9.5"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.618.318h12v12h-12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
