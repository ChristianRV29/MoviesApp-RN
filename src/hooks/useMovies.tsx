import { useEffect, useState } from 'react';

import { MoviesDBInterface, Movie } from './../interfaces/movie';
import movieDB from './../api/movieDB';

interface IMovies {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  incoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovies>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    incoming: [],
  });

  const getMovies = async () => {
    const moviesNowPlaing = movieDB.get<MoviesDBInterface>('/now_playing');
    const moviesPopular = movieDB.get<MoviesDBInterface>('/popular');
    const moviesTopRated = movieDB.get<MoviesDBInterface>('/top_rated');
    const moviesIncomming = movieDB.get<MoviesDBInterface>('/upcoming');

    const resps = await Promise.all([
      moviesNowPlaing,
      moviesPopular,
      moviesTopRated,
      moviesIncomming,
    ]);

    setMovies({
      nowPlaying: resps[0].data.results,
      popular: resps[0].data.results,
      topRated: resps[0].data.results,
      incoming: resps[0].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, isLoading };
};
