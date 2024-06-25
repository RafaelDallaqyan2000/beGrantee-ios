import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../../App';
import {
  HomeIcon,
  NewNotification,
  NotificationIcon,
  PersonIcon,
  ScanIcon,
  TransactionIcon,
} from '../icons';
import {
  NotificationScreen,
  QRCodeScannerScreen,
  ServiceScreen,
  TransactionHistory,
} from '../screens';
import { checkNewNotification } from '../services';
import { MainStack } from './MainStack';
import { ProfileStack } from './ProfileStack';

const Tab = createBottomTabNavigator();

export function TabScreens() {
  const {token} = useContext(AuthContext);

    const {
      data
    } = useQuery({
      initialData: [],
      queryFn: () => checkNewNotification({token: token ?? ''}),
    });    
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabBarStyle.tabBarContainer,
        tabBarInactiveTintColor: '#7C819E',
        tabBarActiveTintColor: '#E7E2DE',
      }}>
      {/*navigate to Main screen*/}
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={tabBarStyle.iconContainer}>
              <HomeIcon inFocus={icon.focused} style={tabBarStyle.everyIcon} />
            </View>
          ),
        }}
      />

      {/*navigate to Service screen when clicked on service details card*/}
      <Tab.Screen
        options={() => ({
          tabBarButton: () => null,
        })}
        name="Service"
        component={ServiceScreen}
      />

      {/*navigate to Notification screen*/}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={tabBarStyle.iconContainer}>
              {
                data ? (
                  <NewNotification 
                   inFocus={icon.focused}
                   style={tabBarStyle.everyIcon}
                  />
                ) : (
                  <NotificationIcon
                    inFocus={icon.focused}
                    style={tabBarStyle.everyIcon}
                  />
                )
              }
            </View>
          ),
        }}
      />

      {/*navigate to Scan screen*/}
      <Tab.Screen
        name="QrScanner"
        component={QRCodeScannerScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View
              style={[
                tabBarStyle.scanPlace,
                {
                  backgroundColor: icon.focused ? '#3875F6' : '#FFF',
                },
              ]}>
              <ScanIcon inFocus={icon.focused} style={tabBarStyle.everyIcon} />
            </View>
          ),
        }}
      />

      {/*navigate to Transaction history screen*/}
      <Tab.Screen
        name="History"
        component={TransactionHistory}
        options={{
          tabBarActiveTintColor: '#FFF',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={[tabBarStyle.iconContainer]}>
              <TransactionIcon
                inFocus={icon.focused}
                style={tabBarStyle.everyIcon}
              />
            </View>
          ),
        }}
      />

      {/* navigate to Profile screen */}
      <Tab.Screen
        name="myProfile"
        component={ProfileStack}
        options={{
          tabBarActiveTintColor: '#FFF',
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: icon => (
            <View style={[tabBarStyle.iconContainer]}>
              <PersonIcon
                inFocus={icon.focused}
                style={tabBarStyle.everyIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarStyle = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: 70,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: 'lightgray',
  },

  iconContainer: {
    borderRadius: 30,
  },

  everyIcon: {
    width: 24,
    height: 24,
  },

  scanPlace: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#8EAEFD',
    position: 'absolute',
    padding: 10,
    elevation: 1,
    shadowColor: '#8EAEFD',
  },
});
