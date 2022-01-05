import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const HomeScreen = () => {

  useEffect(() => {
    console.log('HomeScreen render!');
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
