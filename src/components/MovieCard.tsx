import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Movie } from '../interfaces/movie';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{ uri: posterUri }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 420,
  },
  card: {
    elevation: 5,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MovieCard;
