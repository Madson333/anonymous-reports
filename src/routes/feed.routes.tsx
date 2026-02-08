import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import ReportDetails from '../screens/ReportDetails';

const Stack = createNativeStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="ReportDetails" component={ReportDetails} />
    </Stack.Navigator>
  );
}
