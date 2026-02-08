import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedView from '../screens/Feed';
import ReportDetailsView from '../screens/ReportDetails';
import CameraView from '../screens/Camera';
import ConfirmReportView from '../screens/ConfirmReport';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedView} />
      <Stack.Screen name="ReportDetails" component={ReportDetailsView} />
    </Stack.Navigator>
  );
}

function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Camera" component={CameraView} />
      <Stack.Screen name="ConfirmReport" component={ConfirmReportView} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FeedStack"
          component={FeedStack}
          options={{ title: 'Feed', headerShown: false }}
        />
        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{ title: 'Camera', headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
