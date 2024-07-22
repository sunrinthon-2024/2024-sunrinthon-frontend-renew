import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'screens/auth';

function LoginNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
