// store.js
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
