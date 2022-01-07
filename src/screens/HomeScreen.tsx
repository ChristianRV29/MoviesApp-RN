import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import MovieCard from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { RooStackParams } from '../navigation/Navigation';

const { width: windowWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<RooStackParams, 'Home'> {}

export const HomeScreen = ({ route, navigation }: Props) => {
  const { movies, isLoading } = useMovies();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <View style={{ height: 440 }}>
        <Carousel
          data={movies}
          renderItem={({ item }: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
      <View style={{ backgroundColor: 'red', height: 260 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          In movietheater
        </Text>
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
    </View>
  );
};
