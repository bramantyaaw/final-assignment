import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  errorMessage: "",
  isLoading: false,
};

export const moviesApi = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    try {
      const omdbApi = `http://www.omdbapi.com/?i=tt3896198&apikey=94b194bb&s=${search}`;
      const response = await axios.get(omdbApi);
      const data = response?.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviesApi.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.movies = [];
      })
      .addCase(moviesApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";

        state.movies = action.payload;
      })
      .addCase(moviesApi.rejected, (state, action) => {
        state.isLoading = false;
        state.user = {};
        state.errorMessage = action.error.message;
      });
  },
});

export default movieSlice.reducer;
