import React, { useContext } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import MovieCard from '../components/MovieCard';
import { GradientContext } from '../context/gradient';
import { getImageColors } from '../helpers/getColors';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { movies, isLoading } = useMovies();

  const { topRated, popular, incoming, nowPlaying } = movies;

  const { top } = useSafeAreaInsets();

  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

    setMainColors({ primary, secondary });
  };

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index: number) => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider movies={topRated} title={'Top rated'} />
          <HorizontalSlider movies={popular} title={'Popular movies'} />
          <HorizontalSlider movies={incoming} title={'Incomming'} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
