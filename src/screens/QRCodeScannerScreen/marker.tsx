import {View} from 'react-native';

export function marker(
  color: string,
  size: string | number,
  borderLength: string | number,
  thickness: number = 2,
  borderRadius: number = 0,
): JSX.Element {
  return (
    <View style={{height: size, width: size}}>
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          top: 0,
          left: 0,
          borderColor: color,
          borderTopWidth: thickness,
          borderLeftWidth: thickness,
          borderTopLeftRadius: borderRadius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          top: 0,
          right: 0,
          borderColor: color,
          borderTopWidth: thickness,
          borderRightWidth: thickness,
          borderTopRightRadius: borderRadius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          bottom: 0,
          left: 0,
          borderColor: color,
          borderBottomWidth: thickness,
          borderLeftWidth: thickness,
          borderBottomLeftRadius: borderRadius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          height: borderLength,
          width: borderLength,
          bottom: 0,
          right: 0,
          borderColor: color,
          borderBottomWidth: thickness,
          borderRightWidth: thickness,
          borderBottomRightRadius: borderRadius,
        }}
      />
    </View>
  );
}
