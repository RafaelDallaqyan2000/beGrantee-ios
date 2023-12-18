import {useWindowDimensions, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

type ConvertHTMLType = {
  data: any;
  textStyle?: {};
  containerStyle?: {};
  mb?: number;
  getLayout?: any;
};

export function ConvertHtmlCode({
  data,
  textStyle = {color: '#000'},
  containerStyle,
  mb = 400,
  getLayout,
}: ConvertHTMLType) {
  const {width} = useWindowDimensions();

  if (!data) {
    return;
  }

  const source = {
    html: data,
  };

  return (
    <View onLayout={getLayout} style={[{marginBottom: mb}, containerStyle]}>
      <RenderHtml contentWidth={width} source={source} baseStyle={textStyle} />
    </View>
  );
}
