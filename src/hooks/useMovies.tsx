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
    const moviesPopular = movieDB.get<MoviesDBInterface>('/now_playing');
    const moviesTopRated = movieDB.get<MoviesDBInterface>('/now_playing');
    const moviesIncomming = movieDB.get<MoviesDBInterface>('/now_playing');
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, popularMovies, isLoading };
};
