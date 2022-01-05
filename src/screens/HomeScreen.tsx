import React from 'react';
import { View, Text, Button } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen: React.FC = ({ navigation }: any) => {
  const { movies } = useMovies();

  console.log(movies[0]?.title);

  return (
    <View>
      <Text>Home screen</Text>
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
