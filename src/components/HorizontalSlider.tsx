import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Movie } from '../interfaces/movie';
import MovieCard from './MovieCard';

interface HorizontalSlProps {
  movies: Movie[];
  title?: String;
}

export const HorizontalSlider = (props: HorizontalSlProps) => {
  const { movies, title } = props;

  return (
    <View style={{ height: title ? 260 : 210 }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MovieCard movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
});
