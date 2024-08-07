import React, { Fragment, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from 'screens';
import { LoginNavigation } from 'navigations/index.ts';
import { StatusBar } from 'react-native';
import palette from 'styles/palette.ts';

function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState( true);

  return (
    <Fragment>
      <StatusBar backgroundColor={palette.gray} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isLogin ? 'Home' : 'LoginNavigation'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'LoginNavigation'} component={LoginNavigation} />
      </Stack.Navigator>
    </Fragment>
  );
}

export default RootNavigation;
