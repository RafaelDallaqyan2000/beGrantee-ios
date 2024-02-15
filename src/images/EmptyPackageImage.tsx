import * as React from 'react';
import Svg, {G, Path, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const EmptyPackageImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={263}
    height={272}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#8EAEFD"
        d="M16.989 165.12c-5.517-9.002-2.708-20.762 6.274-26.266l145.604-89.226c8.982-5.504 20.736-2.668 26.252 6.334l47.397 77.345c5.517 9.002 2.707 20.762-6.274 26.266L90.638 248.799c-8.983 5.504-20.736 2.668-26.252-6.334L16.989 165.12Z"
      />
      <Path
        fill="#fff"
        d="m21.396 172.312 178.13-109.158 12.973 21.17-178.13 109.158-12.973-21.17ZM167.803 159.226l50.078-30.688 4.389 7.163-50.078 30.687-4.389-7.162Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M77.228 219.707c-2.832-4.622-1.39-10.659 3.222-13.485 4.611-2.825 10.645-1.37 13.477 3.251 2.833 4.623 1.39 10.66-3.221 13.486-4.612 2.826-10.645 1.37-13.478-3.252Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M93.562 208.92c-2.832-4.622-1.39-10.658 3.222-13.484 4.612-2.826 10.645-1.371 13.477 3.251 2.833 4.622 1.391 10.659-3.221 13.485-4.611 2.826-10.646 1.37-13.478-3.252Z"
      />
    </G>
    <G filter="url(#b)">
      <Path
        fill="#FFC37E"
        d="M12 19.117C12 8.559 20.54 0 31.074 0h170.768c10.534 0 19.074 8.56 19.074 19.117v90.712c0 10.558-8.54 19.117-19.074 19.117H31.074C20.54 128.946 12 120.387 12 109.829V19.117Z"
      />
      <Path fill="#fff" d="M12 27.552h208.916V52.38H12V27.552Z" />
      <Path fill="#FAFAFF" d="M143.67 92.892h58.733v8.4H143.67v-8.4Z" />
      <Path
        fill="#FAFAFF"
        stroke="#FAFAFF"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M34.84 97.135c0-5.42 4.385-9.814 9.794-9.814 5.408 0 9.792 4.393 9.792 9.814s-4.384 9.815-9.792 9.815c-5.409 0-9.793-4.394-9.793-9.816Z"
      />
      <Path
        fill="#FAFAFF"
        stroke="#FAFAFF"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M54.404 96.472c0-5.42 4.385-9.814 9.793-9.814 5.408 0 9.793 4.394 9.793 9.814s-4.385 9.815-9.793 9.815c-5.408 0-9.793-4.395-9.793-9.815Z"
      />
    </G>
    <G stroke="#FF9292" strokeWidth={15} filter="url(#c)">
      <Circle cx={207.5} cy={138.5} r={44} fill="#fff" />
      <Path strokeLinecap="round" strokeLinejoin="round" d="m176 169 63-61" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default EmptyPackageImage;
