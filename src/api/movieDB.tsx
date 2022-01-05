import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'faa56a6bb1241228bfc60b30fc3debfd',
    language: 'en-US',
  },
});

export default movieDB;
