import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {useState} from 'react';
import {window} from '../../screens';
import {useKeyboard} from '../../hooks/useKeyboard';

export function LiveChat() {
  const [isLoading, setIsLoading] = useState(false);
  const keyboardHeight = useKeyboard();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {isLoading && (
        <View style={liveChatStyle.loading}>
          <ActivityIndicator
            style={{width: 50, height: 50}}
            color={'#3875F6'}
            size={35}
          />
        </View>
      )}
      <View
        style={[
          liveChatStyle.openedContainer,
          {
            height:
              window.height - (keyboardHeight === 0 ? 170 : keyboardHeight),
          },
        ]}>
        <WebView
          source={{
            uri: 'https://tawk.to/chat/65d454509131ed19d96ee00a/1hn2min5g',
          }}
          scrollEnabled={true}
          style={liveChatStyle.liveChatOpened}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            Alert.alert(
              'Error',
              'Error connected with live chat, \n please try latter',
            );
          }}
          onLoadProgress={() => setIsLoading(true)}
        />
      </View>
    </SafeAreaView>
  );
}

const liveChatStyle = StyleSheet.create({
  openedContainer: {
    width: window.width,
    // position: 'absolute',
    // bottom: 0,
  },

  liveChatOpened: {
    // flex: 1,
    backgroundColor: 'transparent',
  },

  icon: {
    position: 'absolute',
    bottom: 90,
    right: 30,
    width: 60,
    height: 60,
  },

  loading: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.height,
    width: window.width,
    backgroundColor: '#FFF',
    zIndex: 1000,
  },
});
