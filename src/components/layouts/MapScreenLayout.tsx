import { SafeAreaView, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Header, headerPropsType } from 'components';
import LinearGradient from 'react-native-linear-gradient';

function MapScreenLayout({
  headerProps,
  children,
}: {
  headerProps: headerPropsType;
  children?: React.ReactNode;
}) {
  const screenSize = Dimensions.get('window');
  const localStyle = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: 'red',
    },
    map: {
      width: screenSize.width,
      height: screenSize.height,
      backgroundColor: 'blue',
      zIndex: 1,
    },
    marker: {
      width: 48,
      height: 48,
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 432,
      left: 37,
      zIndex: 1,
    },
  });
  return (
    <SafeAreaView style={localStyle.container}>
      <Header {...headerProps} />
      <View style={localStyle.map}>
        <TouchableOpacity onPress={() => console.log('touch')} style={localStyle.marker} />
      </View>
      <View
        style={{ position: 'absolute', bottom: 0, zIndex: 2, width: '100%' }}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default MapScreenLayout;
