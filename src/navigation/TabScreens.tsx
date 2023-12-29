import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStack} from './MainStack';
import {
  NotificationScreen,
//   QRCodeScannerScreen,
  ServiceScreen,
  TransactionHistory,
} from '../screens';
import {StyleSheet, View} from 'react-native';
import {
  HomeIcon,
  NotificationIcon,
  PersonIcon,
  ScanIcon,
  TransactionIcon,
} from '../icons';
import {ProfileStack} from './ProfileStack';

const Tab = createBottomTabNavigator();

export function TabScreens() {
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
              <NotificationIcon
                inFocus={icon.focused}
                style={tabBarStyle.everyIcon}
              />
            </View>
          ),
        }}
      />

      {/*navigate to Scan screen*/}
      {/*<Tab.Screen*/}
      {/*  name="QrScanner"*/}
      {/*  component={QRCodeScannerScreen}*/}
      {/*  options={{*/}
      {/*    tabBarLabelStyle: {display: 'none'},*/}
      {/*    tabBarIcon: icon => (*/}
      {/*      <View*/}
      {/*        style={[*/}
      {/*          tabBarStyle.scanPlace,*/}
      {/*          {*/}
      {/*            backgroundColor: icon.focused ? '#3875F6' : '#FFF',*/}
      {/*          },*/}
      {/*        ]}>*/}
      {/*        <ScanIcon inFocus={icon.focused} style={tabBarStyle.everyIcon} />*/}
      {/*      </View>*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*/>*/}

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
    height: 70,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
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
