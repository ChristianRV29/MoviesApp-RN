import React, { useState } from 'react';

interface MovieDetails {
  isLoading: boolean;
  movieDetails: any;
  cast: any[];
}

const useMovieDetails = () => {
  const [movieDetails, setmovieDetails] = useState<MovieDetails>();

  return <></>;
};

export default useMovieDetails;
