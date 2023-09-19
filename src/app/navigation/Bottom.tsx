import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from 'screens/main';
import { CallScreen } from 'screens/call';
import { BottomButton } from './ui/BottomButton';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
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
          tabBarButton: () => (
            <BottomButton
              iconName="chatbubbles-outline"
              routeName="MainScreen"
            />
          ),
        }}
      />
      <Tab.Screen
        name="CallScreen"
        component={CallScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: () => (
            <BottomButton iconName="call-outline" routeName="CallScreen" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
