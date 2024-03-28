import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies, searchMovie=false}) => {
    // const title = props.title;
    // const movies = props.movies;
    // const searchMovie = props.searchMovie;
    // console.log("title", title)
    // console.log("movies", movies)
  return (
    <div className="px-8">
      <h1 className={`${searchMovie ? "text-black":"text-white"} text-3xl py-4 `}>{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {/* {movies.map((movie) => {
            return <MovieCard key={movie.id} />;
          })} */}
          {/* <MovieCard/> */}

          {
            movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} />)
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
