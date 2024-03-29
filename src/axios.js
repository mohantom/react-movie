import axios from "axios";

const baseMovieUrl = `https://api.themoviedb.org/3/`;
const apiKey = `&api_key=db92a48cc98dd05417a4d990dd1e47aa`;

const myAxios = axios.create({
  baseURL: baseMovieUrl,
  timeout: 1000
  // headers: {'X-Custom-Header': 'foobar'}
});

myAxios.interceptors.request.use(
  config => {
    // perform a task before the request is sent
    console.log("Request was sent");
    config.url += apiKey;

    return config;
  },
  error => {
    // handle the error
    return Promise.reject(error);
  }
);

const movieUrls = {
  popular: page => `movie/popular?page=${page}`,
  search: query => `search/movie?query=${query}`,
  toprated: page => `movie/top_rated?page=${page}`,
  details: movieid =>
    `https://api.themoviedb.org/3/movie/${movieid}?append_to_response=videos`,
  review: movieid => `https://api.themoviedb.org/3/movie/${movieid}/reviews?`,
  imdbLink: imdbid => `https://www.imdb.com/title/${imdbid}`
};

export { movieUrls };
export default myAxios;
