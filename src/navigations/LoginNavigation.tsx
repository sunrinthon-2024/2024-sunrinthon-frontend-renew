import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, RequestLocationPermission } from 'screens/auth';

function LoginNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen
        name={'RequestLocationPermission'}
        component={RequestLocationPermission}
      />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
