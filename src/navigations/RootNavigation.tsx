import React, { Fragment } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from 'screens';
import { LoginNavigation } from 'navigations/index.ts';
import { StatusBar } from 'react-native';

function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Fragment>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'LoginNavigation'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'LoginNavigation'} component={LoginNavigation} />
      </Stack.Navigator>
    </Fragment>
  );
}

export default RootNavigation;
