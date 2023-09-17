import { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { MainScreen } from 'screens/main';
import { ProfileScreen } from 'screens/profile';

import { ITabBarIcon } from './types';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  const mainScreenButton = useCallback((color: string) => {
    return <Ionicon name="chatbubbles-outline" size={24} color={color} />;
  }, []);

  const profileScreenButton = useCallback((color: string) => {
    return <Ionicon name="person-outline" size={24} color={color} />;
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
          tabBarIcon: (options: ITabBarIcon) =>
            mainScreenButton(options.color, options.focused),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: (options: ITabBarIcon) =>
            profileScreenButton(options.color, options.focused),
        }}
      />
    </Tab.Navigator>
  );
};
