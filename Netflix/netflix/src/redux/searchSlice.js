import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        // actions
        setSearchMovieDetails:(state, action) => {
            // console.log("search action", action);
            const {searchMovie, movies} = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = movies;
            // console.log("state 1", state.movieName);
            // console.log("state 2", state.movies);
        },
        // setMovieName:(state, action) => {
        //     state.movieName = action.payload;
        // },
        // setSearchedMovies:(state, action) => {
        //     state.searchedMovie = action.payload
        // }
    }
});

export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;