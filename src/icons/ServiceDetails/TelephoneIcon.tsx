import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
export const TelephoneIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#7C819E"
        d="M9.087 11.901c-4.44 0-8.051-3.612-8.051-8.051A3.142 3.142 0 0 1 3.77.74a.911.911 0 0 1 .933.538L5.827 3.9a.889.889 0 0 1-.078.844l-.928 1.42a4.277 4.277 0 0 0 1.968 1.957l1.403-.933a.872.872 0 0 1 .845-.073l2.622 1.118a.911.911 0 0 1 .537.934A3.142 3.142 0 0 1 9.087 11.9ZM3.882 1.63A2.236 2.236 0 0 0 1.93 3.85a7.162 7.162 0 0 0 7.157 7.156 2.236 2.236 0 0 0 2.22-1.95l-2.623-1.12-1.397.935a.895.895 0 0 1-.878.061A5.172 5.172 0 0 1 4.016 6.55a.895.895 0 0 1 .056-.878l.933-1.42L3.882 1.63Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.618.318h12v12h-12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
