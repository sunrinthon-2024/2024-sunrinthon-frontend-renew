import { Header } from 'components';
import { SafeAreaView, View, Animated } from 'react-native';

function Map() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Header
        isArrow={true}
        arrowSize={28}
        isEdit={true}
        isMy={true}
        backgroundColor="gradient"
      />
      <View style={{ backgroundColor: 'blue', flex: 1, position: 'relative' }}>
        <View
          style={{
            backgroundColor: '#FFFF00',
            width: 48,
            height: 48,
            position: 'absolute',
            bottom: 24,
            left: 37,
          }}
        />
      </View>
      <Animated.View style={{}}>
        <View
          style={{ width: '100%', height: 390, backgroundColor: 'white' }}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

export default Map;
