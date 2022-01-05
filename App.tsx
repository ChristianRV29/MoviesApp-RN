import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';

const App = () => {
  useEffect(() => {
    console.log('Nice');
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
