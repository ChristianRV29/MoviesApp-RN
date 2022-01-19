import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Cast, MovieDetailsResponse } from '../interfaces/movieDetails';

interface Props {
  movieFull: MovieDetailsResponse;
  cast: Cast[];
}

const DetailsMovie = ({ movieFull, cast }: Props) => {
  return (
    <Fragment>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{movieFull.title}</Text>
        </View>
        <View style={styles.averageContainer}>
          <Icon name={'star-outline'} size={15} color={'grey'} />
          <Text style={styles.averageText}>
            {movieFull.vote_average} -{' '}
            {movieFull.genres.map((genre, i) => {
              return i === movieFull.genres.length - 1
                ? `${genre.name}`
                : `${genre.name}, `;
            })}
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  titleContainer: {
    textAlign: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    borderBottomEndRadius: 30,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    fontFamily: 'Cochin',
    paddingRight: 10,
  },
  averageContainer: {
    paddingTop: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  averageText: {
    color: 'grey',
    fontSize: 15,
    paddingHorizontal: 5,
    letterSpacing: 1,
  },
});

export default DetailsMovie;

{
  /* <View style={styles.rateContainer}>
  <Icon name={'star-outline'} color={'gray'} size={16} />
  <Text style={styles.rateText}>{movieFull.vote_average}</Text>
</View> */
}
