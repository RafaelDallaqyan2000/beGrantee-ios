import Svg, {Path} from 'react-native-svg';

export const ScanIcon = (props:any) => {
  const {inFocus} = props;
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke={inFocus ? '#FFF' : "#3875F6"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 10h18M2 7V5a4 4 0 0 1 4-4h2"
    />
    <Path
      fill={inFocus ? '#FFF' : "#3875F6"}
      fillRule="evenodd"
      d="M1.25 11.5V13A4.75 4.75 0 0 0 6 17.75h2a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 13v-1.5h-1.5Zm16 0V13A3.25 3.25 0 0 1 14 16.25h-2a.75.75 0 0 0 0 1.5h2A4.75 4.75 0 0 0 18.75 13v-1.5h-1.5Z"
      clipRule="evenodd"
    />
    <Path
      stroke={inFocus ? '#FFF' : "#3875F6"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 7V5a4 4 0 0 0-4-4h-2"
    />
  </Svg>
  );
};
