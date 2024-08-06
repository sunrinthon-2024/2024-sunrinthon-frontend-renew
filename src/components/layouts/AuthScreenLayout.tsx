import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { palette } from 'styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function AuthScreenLayout({ children }: React.PropsWithChildren) {
  const { bottom } = useSafeAreaInsets();
  const bottomInset = bottom === 0 ? 20 : bottom;
  const local = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      paddingBottom: bottomInset,
      paddingHorizontal: 12,
      backgroundColor: palette.gray,
    },
  });

  return <SafeAreaView style={local.container}>{children}</SafeAreaView>;
}

export default AuthScreenLayout;
