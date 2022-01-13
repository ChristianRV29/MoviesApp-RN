import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Movie } from '../interfaces/movie';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {

  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.8}
      style={{ height, width, marginHorizontal: 8 }}>
      <View style={styles.card}>
        <Image source={{ uri: posterUri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    elevation: 9,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MovieCard;
