import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
export const LoadIcon = props => {
  const {width = 64, height = 64} = props;
  return (
    <Svg
      {...props}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none">
      <Rect
        width={2.668}
        height={16.009}
        x={31.166}
        y={0.03}
        fill="#C4C4C4"
        rx={1.334}
      />
      <Rect
        width={2.668}
        height={16.009}
        x={0.481}
        y={33.383}
        fill="#DDD"
        rx={1.334}
        transform="rotate(-90 .481 33.383)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={17.646}
        y={60.445}
        fill="#DDD"
        rx={1.334}
        transform="rotate(-150 17.646 60.445)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={49.665}
        y={59.111}
        fill="#575757"
        rx={1.334}
        transform="rotate(150 49.665 59.11)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={60.896}
        y={46.903}
        fill="#6D6D6D"
        rx={1.334}
        transform="rotate(120 60.896 46.903)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={59.562}
        y={14.884}
        fill="#989898"
        rx={1.334}
        transform="rotate(60 59.562 14.884)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={33.834}
        y={64.068}
        fill="#414141"
        rx={1.334}
        transform="rotate(180 33.834 64.068)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={64.519}
        y={30.715}
        fill="#828282"
        rx={1.334}
        transform="rotate(90 64.519 30.715)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={47.354}
        y={3.653}
        fill="#AEAEAE"
        rx={1.334}
        transform="rotate(30 47.354 3.653)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={15.335}
        y={4.987}
        fill="#D9D9D9"
        rx={1.334}
        transform="rotate(-30 15.335 4.987)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={4.104}
        y={17.195}
        fill="#EFEFEF"
        rx={1.334}
        transform="rotate(-60 4.104 17.195)"
      />
      <Rect
        width={2.668}
        height={16.009}
        x={5.438}
        y={49.214}
        fill="#E7E7E7"
        rx={1.334}
        transform="rotate(-120 5.438 49.214)"
      />
    </Svg>
  );
};
