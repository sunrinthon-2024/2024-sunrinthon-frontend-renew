import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Header, headerPropsType } from 'components';
import { palette } from 'styles';

function GenericLayout({
  gap,
  headerProps,
  children,
}: {
  gap: number;
  headerProps: headerPropsType;
  children: React.ReactNode;
}) {
  const localStyle = StyleSheet.create({
    wholeScreen: {
      flex: 1,
      backgroundColor: palette.gray,
      width: '100%',
    },
    mainScreen: {
      gap: gap,
      paddingHorizontal: 12,
    },
    topMargin: {
      height: 26,
    },
    bottomMargin: {
      height: 60,
    },
    headerWrapper: {
      paddingVertical: 8,
    },
  });
  return (
    <SafeAreaView style={localStyle.wholeScreen}>
      <View style={localStyle.headerWrapper}>
        <Header {...headerProps} />
      </View>
      <ScrollView style={localStyle.mainScreen}>
        <View style={localStyle.topMargin} />
        {children}
        <View style={localStyle.bottomMargin} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default GenericLayout;
