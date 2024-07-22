import { View } from 'react-native';
import React from 'react';
import { auth } from 'styles';

function AuthScreenLayout({ children }: React.PropsWithChildren) {
  return <View style={auth.container}>{children}</View>;
}

export default AuthScreenLayout;
