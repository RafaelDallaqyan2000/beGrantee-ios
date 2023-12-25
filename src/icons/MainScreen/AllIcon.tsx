import Svg, {Path} from 'react-native-svg';

export function AllIcon(props) {
  const {style, isActive} = props;
  return (
    <Svg style={style} width={24} height={24} fill="none">
      <Path
        stroke={isActive ? '#fff' : '#2F2F2F'}
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10V3H3.5v7H12ZM21.5 21v-7H13v7h8.5ZM16 3v7h5.5V3H16ZM3.5 14v7H9v-7H3.5Z"
      />
    </Svg>
  );
}
