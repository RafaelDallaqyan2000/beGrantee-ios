import {Pressable, StyleSheet, View} from 'react-native';
import {window} from '../../screens';
import {CloseIcon} from '../../icons';
import React from 'react';

type LiveChatHeaderType = {
  handleClickCloseBtn: () => void;
};
export function HeaderForLiveChat({
  handleClickCloseBtn = () => {},
}: LiveChatHeaderType) {
  return (
    <View style={style.headerContainer}>
      <Pressable style={style.pressableContainer} onPress={handleClickCloseBtn}>
        <CloseIcon width={30} height={20} fill="#7B7B7B" />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  headerContainer: {
    width: window.width,
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  pressableContainer: {
    padding: 5,
  },
});
