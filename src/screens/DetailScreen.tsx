import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from './../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Movie } from '../interfaces/movie';
import DetailsMovie from '../components/DetailsMovie';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, any> {}

Ionicons.loadFont();

const DetailScreen = ({ route }: Props) => {
  const movie = route.params as Movie;
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { movieDetails, isLoading, cast } = useMovieDetails({
    idMovie: movie.id,
  });

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri: posterUri }} style={styles.image} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {isLoading ? (
          <ActivityIndicator size={30} color={'gray'} />
        ) : (
          <DetailsMovie movieFull={movieDetails!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
  },
});

export default DetailScreen;
