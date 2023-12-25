import Svg, {Circle, Path} from 'react-native-svg';

export const TransactionIcon = (props: any) => {
  const {inFocus} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}>
      <Circle
        cx={10}
        cy={10}
        r={9.25}
        stroke={inFocus ? '#3875F6' : '#363538'}
        fill={inFocus ? '#3875F6' : '#FFF'}
        strokeWidth={1.5}
      />
      <Path
        stroke={inFocus ? '#FFF' : '#363538'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 5v6h4"
      />
    </Svg>
  );
};
