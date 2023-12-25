import Svg, {Path} from 'react-native-svg';

const SearchIcon = props => {
  const {onPress, width = 25, height = 25} = props;
  return (
    <Svg
      onPress={onPress}
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none">
      <Path
        stroke="#7C819E"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.496 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
      />
      <Path
        stroke="#7C819E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.325 7.172A3.987 3.987 0 0 0 11.496 6a3.987 3.987 0 0 0-2.828 1.172M17.607 16.61l4.243 4.244"
      />
    </Svg>
  );
};

export default SearchIcon;
