import axios from 'axios';
import { Component } from 'react';

class MoviesApiService extends Component {
  _URL_ORIGIN = 'https://api.themoviedb.org/3';
  _apiKey = '739ddb8e241607cc9ff00a57b23f5e54';

    getTrendingMovies = async () => {
    const searchParam = new URLSearchParams({
      api_key: this._apiKey,
    });
      const pathName = '/trending/movie/day'

     return axios
      .get(`${this._URL_ORIGIN}${pathName}?${searchParam}`)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(`Error: ${response.message}`);
        }

        if (response.data.total_results === 0) {
          return Promise.reject(
            'Sorry, no matches found. Please try again.'
          );
        }
        return response.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

  getMoviesBySearchQuery= async (query, page) => {
    const searchParam = new URLSearchParams({
      query,
      page,
      api_key: this._apiKey,
    });
    const pathName = '/search/movie'

     return axios
      .get(`${this._URL_ORIGIN}${pathName}?${searchParam}`)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(`Error: ${response.message}`);
        }

        if (response.data.total_results === 0) {
          return Promise.reject(
            'Sorry, no matches found. Please try again.'
          );
        }
        return response.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };

    getMovieDetails= async (searchPath) => {
    const searchParam = new URLSearchParams({
      api_key: this._apiKey,
    });

    const pathName = '/movie/'
    
     return axios
      .get(`${this._URL_ORIGIN}${pathName}/${searchPath}?${searchParam}`)
      .then(response => {
        if (response.status !== 200) {
          return Promise.reject(`Error: ${response.message}`);
        }

        if (response.data.total_results === 0) {
          return Promise.reject(
            "Unfortunately, we don't have more details about this movie..."
          );
        }
        return response.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

const moviesAPI = new MoviesApiService();

export default moviesAPI;
