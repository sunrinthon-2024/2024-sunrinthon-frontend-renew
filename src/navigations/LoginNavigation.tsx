import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, LoginSuccess, RequestLocationPermission } from 'screens/auth';

function LoginNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen
        name={'RequestLocationPermission'}
        component={RequestLocationPermission}
      />
      <Stack.Screen name={'LoginSuccess'} component={LoginSuccess} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
