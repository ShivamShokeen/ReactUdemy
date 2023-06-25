import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Slices/UserSlice";


const galleryStore = configureStore({
  reducer: {
    user: UserReducer
  },
});

export { galleryStore};

export * from './thunks/fetchUsers';

export * from "./thunks/addUser";

export * from "./thunks/deleteUser";

export * from "./thunks/updateUser";