import { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { MainScreen } from 'screens/main';
import { CallScreen } from 'screens/call';

import { ITabBarIcon } from './types';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const mainScreenButton = useCallback((color: string) => {
    return <Ionicon name="chatbubbles-outline" size={24} color={color} />;
  }, []);

  const callScreenButton = useCallback((color: string) => {
    return <Ionicon name="call-outline" size={24} color={color} />;
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (options: ITabBarIcon) => mainScreenButton(options.color),
        }}
      />
      <Tab.Screen
        name="CallScreen"
        component={CallScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (options: ITabBarIcon) => callScreenButton(options.color),
        }}
      />
    </Tab.Navigator>
  );
};
