import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Movie } from '../interfaces/movie';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{ height, width, marginHorizontal: 8 }}>
      <View style={styles.card}>
        <Image source={{ uri: posterUri }} style={styles.image} />
      </View>
    </View>
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
