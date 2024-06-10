import React, {createContext, useCallback, useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SecureStorage from 'react-native-encrypted-storage';
import {Text} from 'react-native';
import globalStyles from './src/styles/globalStyles';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationScreens} from './src/navigation';
import {getFcmToken, registerListenerWithFCM } from './src/utils/fcmHelper';
import './src/localization/i18n';


interface AuthContextValue {
  token?: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const queryClient = new QueryClient();

export const AuthContext = createContext<AuthContextValue>({
  token: null,
  setToken: () => {},
});

function App(): JSX.Element {
  const [token, setToken] = useState<string | null>(null);
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    SecureStorage.getItem('token')
      .then(value => {
        setToken(value);
      })
      .finally(() => setCheckingToken(false));

      getFcmToken();

  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();    
    return unsubscribe;
  }, []);

  // const getOrSetFCMToken = useCallback(async () => {
  //   try {
  //     let fcmToken = await SecureStorage.getItem('fcmToken');
  //     // const enabled = await firebase.messaging().hasPermission();
  //     // if (enabled) {
  //     //   // if not generate one on firebase and set on database and local storage
  //     //   fcmToken = await messaging().getToken();
  //     // } else {
  //     //   await firebase.messaging().requestPermission();
  //     // }
  
  //     console.log(fcmToken, '<<<<<');
      
  //     if (fcmToken != null) {
  //       await SecureStorage.setItem('fcmToken', 'fcmToken');
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [token]);

  if (checkingToken) {
    return <Text style={globalStyles.title}>Loading...</Text>;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{token, setToken}}>
          <NavigationScreens />
        </AuthContext.Provider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
