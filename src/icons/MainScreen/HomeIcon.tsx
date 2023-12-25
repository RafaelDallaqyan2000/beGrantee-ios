import Svg, {Path} from 'react-native-svg';

export const HomeIcon = (props: any) => {
  const {inFocus, style} = props;
  return (
    <Svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={19}
      fill="none"
      {...props}>
      <Path
        fill={inFocus ? '#3875F6' : 'white'}
        stroke={inFocus ? 'none' : '#363538'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d={
          inFocus
            ? 'M1.664 5.669 7.501.999A4 4 0 0 1 12.5 1l5.836 4.67a4 4 0 0 1 1.488 3.455l-.67 8.042A2 2 0 0 1 17.16 19h-3.885a2 2 0 0 1-1.898-2.632l.253-.76a1.982 1.982 0 1 0-3.76 0l.252.76A2 2 0 0 1 6.225 19H2.84a2 2 0 0 1-1.993-1.834l-.67-8.042A4 4 0 0 1 1.664 5.67Z'
            : 'm2.133 6.254 5.837-4.67a3.25 3.25 0 0 1 4.06 0l5.837 4.67a3.25 3.25 0 0 1 1.209 2.808l-.67 8.042a1.25 1.25 0 0 1-1.246 1.146h-3.885a1.25 1.25 0 0 1-1.186-1.645l.253-.759a2.732 2.732 0 1 0-5.184 0l.253.759a1.25 1.25 0 0 1-1.186 1.645H2.84a1.25 1.25 0 0 1-1.245-1.146l-.67-8.042a3.25 3.25 0 0 1 1.208-2.808Z'
        }
      />
    </Svg>
  );
};
