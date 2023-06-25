import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateAlbum = createAsyncThunk("album/update", async (payload) => {
  let response = await axios.patch("http://127.0.0.1:3001/albums", payload);
  return response?.data ? response?.data : response;
});

export { updateAlbum };
