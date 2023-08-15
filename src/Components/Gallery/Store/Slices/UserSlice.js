import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
import { updateUser } from "../thunks/updateUser";

export const userReset = createAction("app/reset");

const UserSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(userReset, (state, action) => {
      return [];
    });

    // Fetch User

    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Fetch User

    // Add User

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Add User

    // Update User

    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action.payload user update", action.payload);
      // state.data.push(action.payload);
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Update User

    // Delete User

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("action payload for delete", action.payload);
      // let
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Delete User
  },
});

export const UserReducer = UserSlice.reducer;
