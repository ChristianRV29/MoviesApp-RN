import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    movieDB.get('/now_playing').then(data => {
      console.log(data);
    });
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
