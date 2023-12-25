import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens';
import {StyleSheet} from 'react-native';
import {SearchInput} from '../components';
const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {elevation: 0},
          headerRight: () => <SearchInput />,
          headerTitleStyle: style.titleStyle,
        }}
        name="Main"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  titleStyle: {
    color: '#333333',
    fontFamily: 'NotoSansArmenian-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
  },
});
