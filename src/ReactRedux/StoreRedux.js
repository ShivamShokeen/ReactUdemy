import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      if (index != -1) state.splice(index, 1);
    },
    // resetMovie(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    })
  }
});


const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      if (index != -1) state.splice(index, 1);
    },
    resetSong(state, action) {
      return [];
    },
  },
  extraReducers(builder) {
   builder.addCase(reset, (state, action) => {
     return [];
   });
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});

// store.dispatch(songsSlice.actions.addSong("some song"));
// store.dispatch to set a value

export { store };

export const { addSong, removeSong, resetSong } = songsSlice.actions;

export const { addMovie, removeMovie } = movieSlice.actions;
