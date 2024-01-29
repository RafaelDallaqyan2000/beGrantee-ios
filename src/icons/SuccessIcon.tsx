import Svg, {Defs, G, Path} from 'react-native-svg';

export const SuccessIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={99}
    height={95}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#7ACD91"
        d="M63.986 85.505c-17.658.563-34.818-.555-51.269-3.284C6.187 81.1.82 74.174 1.005 67.277c.59-17.127 2.857-33.854 6.921-51.064C9.634 9.225 16.932 2.604 23.801 1.974a266.391 266.391 0 0 1 52.434.683c7.178.843 13.112 7.981 12.842 15.359a259.594 259.594 0 0 1-8.084 53.658c-1.907 7.152-9.776 13.563-17.007 13.831Z"
      />
      <G filter="url(#b)">
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={15}
          d="M64 31 38.5 54 29 41"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
