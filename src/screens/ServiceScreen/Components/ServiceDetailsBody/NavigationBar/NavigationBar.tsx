import {Pressable, Text, View} from 'react-native';
import {navigationBarStyle} from './navigationBarStyle';

export function NavigationBar(data: any) {
  const {callback, state, items = []} = data;

  const handleClick = (id: number) => {
    callback(id);
  };

  return (
    <View style={navigationBarStyle.navBarContainer}>
      {items.map((el: {id: number; text: string}) => {
        const selected = state === el.id;
        const color = selected ? '#3875F6' : '#7B7B7B';
        return (
          <Pressable key={el.id} onPress={() => handleClick(el.id)}>
            <Text
              style={[
                navigationBarStyle.title,
                {
                  color,
                  borderBottomColor: color,
                  borderBottomWidth: selected ? 2 : 0,
                  fontFamily: selected
                    ? 'NotoSansArmenian-SemiBold'
                    : 'NotoSansArmenian-Regular',
                },
              ]}>
              {el.text}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
