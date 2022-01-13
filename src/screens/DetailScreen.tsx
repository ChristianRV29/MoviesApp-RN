import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

import { RootStackParams } from './../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movie';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, any> {}

const DetailScreen = ({ route }: Props) => {
  const movie = route.params as Movie;
  const posterUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri: posterUri }} style={styles.image} />
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.paragraph}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 9,
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
