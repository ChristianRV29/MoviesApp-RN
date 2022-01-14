import { useState, useEffect } from 'react';

import movieDB from './../api/movieDB';
import { MovieDetailsResponse } from './../interfaces/movieDetails';
interface MovieDetails {
  isLoading: boolean;
  movieDetails: any;
  cast: any[];
}

interface useMovieDetailsProps {
  idMovie: number;
}

export const useMovieDetails = ({ idMovie }: useMovieDetailsProps) => {
  const [movieDetails, setmovieDetails] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    await movieDB
      .get<MovieDetailsResponse>(`/${idMovie}`)
      .then(res => {
        console.log(res.data.overview);
      })
      .catch(err => console.log(err.error || err.message));
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { movieDetails, getMovieDetails };
};
