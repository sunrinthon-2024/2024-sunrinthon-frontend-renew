import { StyleSheet, View } from 'react-native';
import React from 'react';
import { palette } from 'styles';

function AuthScreenLayout({ children }: React.PropsWithChildren) {
  const local = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: palette.gray,
    },
  });

  return <View style={local.container}>{children}</View>;
}

export default AuthScreenLayout;
