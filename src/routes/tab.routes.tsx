import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedStack from './feed.routes';
import CameraStack from './camera.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FeedStack"
          component={FeedStack}
          options={{ title: 'Feed' }}
        />
        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{ title: 'Camera' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
