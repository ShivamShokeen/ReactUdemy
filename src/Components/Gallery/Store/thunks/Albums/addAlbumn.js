import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addAlbum = createAsyncThunk("album/add", async (payload) => {
  let response = await axios.post("http://127.0.0.1:3001/albums", payload);
  return response?.data ? response?.data : response;
});

export { addAlbum };
