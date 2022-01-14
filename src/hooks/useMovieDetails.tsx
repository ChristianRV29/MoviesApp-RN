import { useState, useEffect } from 'react';

import movieDB from './../api/movieDB';
import {
  MovieDetailsResponse,
  CreditsResponse,
  Cast,
} from './../interfaces/movieDetails';
interface MovieDetails {
  isLoading: boolean;
  movieDetails?: MovieDetailsResponse;
  cast: Cast[];
}

interface useMovieDetailsProps {
  idMovie: number;
}

export const useMovieDetails = ({ idMovie }: useMovieDetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieDetails: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {

    console.log(`/${idMovie}/credits`);

    const detailsResponse = await movieDB.get<MovieDetailsResponse>(
      `/${idMovie}`,
    );
    const creditsResponse = await movieDB.get<CreditsResponse>(
      `/${idMovie}/credits`,
    );

    const [movieDetailsResponse, castReponse] = await Promise.all([
      detailsResponse,
      creditsResponse,
    ]);

    setMovieDetails({
      isLoading: false,
      movieDetails: movieDetailsResponse.data,
      cast: castReponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...movieDetails, getMovieDetails };
};
