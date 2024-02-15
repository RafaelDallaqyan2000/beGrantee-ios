import {View} from 'react-native';
import {serviceScreenStyle} from './serviceScreenStyle';
import React from 'react';

export function OpacityMoreLessButton(): any {
  let customOpacityViews = [];
  let bottom = 0;
  let opacity = 1;

  for (let i = 0; i <= 10; i++) {
    bottom += 5;
    opacity -= 0.1;
    customOpacityViews.push(
      <View
        style={[
          serviceScreenStyle.opacityContainer,
          {
            bottom: 30 + bottom,
            opacity: opacity,
          },
        ]}
      />,
    );
  }

  return customOpacityViews;
}
