import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
}

interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("https://freetestapi.com/api/v1/movies");
  return response.data;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default moviesSlice.reducer;
