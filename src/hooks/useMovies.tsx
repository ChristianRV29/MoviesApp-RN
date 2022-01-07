import { useEffect, useState } from 'react';

import { MoviesDBInterface, Movie } from './../interfaces/movie';
import movieDB from './../api/movieDB';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    await movieDB
      .get<MoviesDBInterface>('/now_playing')
      .then(resp => {
        const { results } = resp.data;
        if (results.length > 0) {
          setMovies(results);
        }
      })
      .catch(err =>
        console.log('An error has been ocurred: ' + (err.message || err.error)),
      );

    await movieDB
      .get<MoviesDBInterface>('/popular')
      .then(resp => {
        const { results } = resp.data;
        if (results.length > 0) {
          setPopularMovies(results);
        }
      })
      .catch(err =>
        console.log('An error has been ocurred: ' + (err.message || err.error)),
      )
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies, popularMovies, isLoading };
};
