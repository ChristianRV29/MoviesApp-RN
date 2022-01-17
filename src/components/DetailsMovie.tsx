import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Movie } from '../interfaces/movie';
import { Cast } from '../interfaces/movieDetails';

interface Props {
  movieFull: Movie;
  cast: Cast[];
}

const DetailsMovie = ({ movieFull, cast }: Props) => {
  return (
    <Fragment>
      <View style={styles.rateContainer}>
        <Icon name={'star-outline'} color={'gray'} size={16} />
        <Text style={styles.rateText}>{movieFull.vote_average}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  rateContainer: {
    paddingTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rateText: {
    color: 'gray',
    paddingHorizontal: 5,
  },
});

export default DetailsMovie;
