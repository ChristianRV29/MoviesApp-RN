import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import movieDB from './../api/movieDB';
import { MovieDBInterface } from './../interfaces/movie';

export const HomeScreen: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    movieDB.get<MovieDBInterface>('/now_playing').then(resp => {
      console.log(resp.data.results[0].id);
    });
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
