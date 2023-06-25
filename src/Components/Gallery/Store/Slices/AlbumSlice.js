import { createSlice } from "@reduxjs/toolkit";
import { addAlbum } from "../thunks/Albums/addAlbumn";
import { fetchAlbum } from "../thunks/Albums/fetchAlbum";
import { updateAlbum } from "../thunks/Albums/updateAlbum";
import { deleteAlbum } from "../thunks/Albums/deleteAlbum";

const AlbumSlice = createSlice({
  name: "albums",
  initialState: {
    albumData: [],
    isLoading: false,
    error: "",
  },
  extraReducers(builder) {
    // Fetch User

    builder.addCase(fetchAlbum.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Fetch User

    // Add User

    builder.addCase(addAlbum.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add User

    // Update User

    builder.addCase(updateAlbum.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(updateAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action.payload user update", action.payload);
      // state.data.push(action.payload);
    });

    builder.addCase(updateAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Update User

    // Delete User

    builder.addCase(deleteAlbum.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action payload for delete", action.payload);
      // let
    });

    builder.addCase(deleteAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Delete User
  },
});

export { AlbumSlice };
