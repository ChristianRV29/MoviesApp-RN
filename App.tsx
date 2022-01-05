import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    console.log('Nice');
  }, []);

  return (
    <NavigationContainer>
        <Text>Hello world!</Text>
    </NavigationContainer>
  );
};

export default App;
