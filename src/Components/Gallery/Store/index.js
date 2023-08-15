import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Slices/UserSlice";

const galleryStore = configureStore({
  reducer: {
  user: UserReducer,
  },
});

export { galleryStore };

export * from "./thunks/fetchUsers";

export * from "./thunks/addUser";

export * from "./thunks/deleteUser";

export * from "./thunks/updateUser";

export * from "./thunks/Albums/addAlbumn";

export * from "./thunks/Albums/updateAlbum";

export * from "./thunks/Albums/fetchAlbum";

export * from "./thunks/Albums/deleteAlbum";

export * from "./thunks/Photos/addPhoto";

export * from "./thunks/Photos/updatePhoto";

export * from "./thunks/Photos/fetchPhoto";

export * from "./thunks/Photos/deletePhoto";
