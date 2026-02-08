import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from '../screens/Camera';
import ConfirmReport from '../screens/ConfirmReport';

const Stack = createNativeStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="ConfirmReport" component={ConfirmReport} />
    </Stack.Navigator>
  );
}
