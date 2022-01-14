import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from './../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Movie } from '../interfaces/movie';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, any> {}

Ionicons.loadFont();

const DetailScreen = ({ route }: Props) => {
  const movie = route.params as Movie;
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { movieDetails } = useMovieDetails({ idMovie: movie.id });

  console.log(movieDetails);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri: posterUri }} style={styles.image} />
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>{movie!.id}</Text>
        <Text style={styles.paragraph}>{movie!.title}</Text>
      </View>
      <View style={styles.overviewContainer}>
        <Ionicons size={20} name={'star-outline'} color={'black'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
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
  overviewContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  paragraph: {
    fontSize: 17,
    color: 'gray',
  },
});

export default DetailScreen;
