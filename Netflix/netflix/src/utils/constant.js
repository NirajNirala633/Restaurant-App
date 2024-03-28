export const API_END_POINT = "http://localhost:8080/api/v1/user";

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTdiOTA4OGVjYzY5ZGRlMWEzZTg1NGQzM2MxNGIzMSIsInN1YiI6IjY1ZmIyYTU5Y2Y2MmNkMDE0YTU1NDJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0gYjs6TGCA9SGiZCz-1wW7SXdHwOaG38sMfJMO3majE'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const Search_Movie_Url = "https://api.themoviedb.org/3/search/movie?query="

// export const Banner_Url = "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";


