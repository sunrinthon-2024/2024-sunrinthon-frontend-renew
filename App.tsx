import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from '@navigations/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
