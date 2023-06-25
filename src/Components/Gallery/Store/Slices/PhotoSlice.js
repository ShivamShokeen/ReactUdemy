import { createSlice } from "@reduxjs/toolkit";
import { fetchPhoto } from "../thunks/Photos/fetchPhoto";
import { addPhoto } from "../thunks/Photos/addPhoto";
import { updatePhoto } from "../thunks/Photos/updatePhoto";
import { deletePhoto } from "../thunks/Photos/deletePhoto";

const PhotoSlice = createSlice({
  name: "photos",
  initialState: {
    photoData: [],
    isLoading: false,
    error: "",
  },
  extraReducers(builder) {
    // Fetch User

    builder.addCase(fetchPhoto.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchPhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Fetch User

    // Add User

    builder.addCase(addPhoto.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addPhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addPhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add User

    // Update User

    builder.addCase(updatePhoto.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(updatePhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action.payload user update", action.payload);
      // state.data.push(action.payload);
    });

    builder.addCase(updatePhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Update User

    // Delete User

    builder.addCase(deletePhoto.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deletePhoto.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action payload for delete", action.payload);
      // let
    });

    builder.addCase(deletePhoto.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Delete User
  },
});

export { PhotoSlice };
