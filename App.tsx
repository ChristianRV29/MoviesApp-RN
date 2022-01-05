import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  useEffect(() => {
    console.log('Nice');
  }, []);

  return (
    <View>
      <Text>Hello world!</Text>
    </View>
  );
};

export default App;
