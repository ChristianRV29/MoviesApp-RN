import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { Cast, MovieDetailsResponse } from '../interfaces/movieDetails';
import ActorCard from './ActorCard';

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
        <View style={styles.overviewContainer}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewText}>{movieFull.overview}</Text>
          <Text style={styles.overviewTitle}>Budget</Text>
          <Text style={styles.overviewText}>
            {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
          </Text>
          <Text style={styles.overviewTitle}>Actors</Text>
          <ActorCard actorInfo={cast[0]} />
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
  overviewContainer: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  overviewTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  overviewText: {
    textAlign: 'justify',
    color: 'grey',
    fontSize: 15,
  },
});

export default DetailsMovie;
