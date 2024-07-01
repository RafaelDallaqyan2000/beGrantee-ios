import React, {createContext, useCallback, useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SecureStorage from 'react-native-encrypted-storage';
import {Text, Alert, Platform, Linking} from 'react-native';
import globalStyles from './src/styles/globalStyles';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationScreens} from './src/navigation';
import {getFcmToken, registerListenerWithFCM } from './src/utils/fcmHelper';
import './src/localization/i18n';
import VersionCheck from 'react-native-version-check';
import * as StoreReview from 'react-native-store-review';

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
    const checkAppVersion = async () => {
      try {
        const latestVersion = await fetch(`https://itunes.apple.com/in/lookup?bundleId=com.digitalwave.begrantee2019`)
          .then(r => r.json())
          .then((res) => res?.results[0]?.version)

        const currentVersion = VersionCheck.getCurrentVersion();

        // if (latestVersion > currentVersion) {
          Alert.alert(
            'Update Required',
            'A new version of the app is available. Please update to continue using the app.',
            [
              {
                text: 'Update Now',
                onPress: () => {
                  console.log('ss');
                  
                  // Linking.openURL('https://apps.apple.com/am/app/begrantee/id6478381838');
                  // StoreReview?.openStoreListening('id6478381838')
                  Linking.openURL('itms-apps://apps.apple.com/app/id6478381838')
                  // Platform.select({ios: 'itms-apps://apps.apple.com/app/id6478381838?action=write-review'})
                },
              },
            ],
            { cancelable: false }
          );
        // } else {
        //   // App is up-to-date; proceed with the app
        // }
      } catch (error) {
        // Handle error while checking app version
        console.error('Error checking app version:', error);
      }
    };

    checkAppVersion();
  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();    
    return unsubscribe;
  }, []);


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
