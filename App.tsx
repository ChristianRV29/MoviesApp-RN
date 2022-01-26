import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';
import { GradientContextProvider } from './src/context/gradient';

const App = () => {
  return (
    <NavigationContainer>
      <GradientContextProvider>
        <Navigation />
      </GradientContextProvider>
    </NavigationContainer>
  );
};

export default App;
