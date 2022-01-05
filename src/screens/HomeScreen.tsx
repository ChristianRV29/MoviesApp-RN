import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen: React.FC = ({ navigation }: any) => {
  const { movies, isLoading } = useMovies();

  console.log(movies[0]?.title);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home screen</Text>
      <Button title={'Navegar'} onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};
