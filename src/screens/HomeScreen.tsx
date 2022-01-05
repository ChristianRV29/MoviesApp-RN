import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    console.log('HomeScreen render!');
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
