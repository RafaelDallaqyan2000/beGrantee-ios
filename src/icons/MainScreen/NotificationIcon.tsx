import Svg, {Path} from 'react-native-svg';

export const NotificationIcon = (props: any) => {
  const {inFocus} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      fill="none"
      {...props}>
      <Path
        stroke={inFocus ? '#3875F6' : '#363538'}
        fill={inFocus ? '#3875F6' : '#363538'}
        strokeWidth={1.5}
        d="M11 17a2 2 0 1 1-4 0h4Z"
      />
      <Path
        stroke={inFocus ? '#3875F6' : '#363538'}
        fill={inFocus ? '#3875F6' : 'white'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.807 8.5V7.2a6.45 6.45 0 1 1 12.9 0v1.3c0 1.909.465 4.304.88 6.07.202.862-.448 1.68-1.278 1.68H2.967c-.874 0-1.554-.916-1.274-1.828.535-1.735 1.114-4.037 1.114-5.922Z"
      />
    </Svg>
  );
};
