import Svg, {Circle, Path} from 'react-native-svg';

export const PersonIcon = (props: any) => {
  const {inFocus} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={20}
      fill="none"
      {...props}>
      <Circle
        cx={8}
        cy={5}
        r={4.25}
        stroke={inFocus ? '#3875F6' : '#363538'}
        fill={inFocus ? '#3875F6' : 'white'}
        strokeWidth={1.5}
      />
      <Path
        stroke={inFocus ? '#3875F6' : '#363538'}
        fill={inFocus ? '#3875F6' : 'white'}
        strokeWidth={1.5}
        d="M15.25 15.5c0 .851-.621 1.775-1.96 2.528-1.317.74-3.185 1.222-5.29 1.222s-3.973-.482-5.29-1.222C1.372 17.275.75 16.351.75 15.5s.621-1.775 1.96-2.528c1.317-.74 3.185-1.222 5.29-1.222s3.973.482 5.29 1.222c1.339.753 1.96 1.677 1.96 2.528Z"
      />
    </Svg>
  );
};
