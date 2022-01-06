import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen: React.FC = ({ navigation }: any) => {
  const { movies, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top }}>
      <Text>Home screen</Text>
      <MovieCard movie={movies[0]} />
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
