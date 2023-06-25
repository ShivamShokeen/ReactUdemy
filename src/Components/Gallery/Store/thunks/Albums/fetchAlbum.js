import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAlbum = createAsyncThunk("album/fetch", async () => {
  let response = await axios.get("http://127.0.0.1:3001/albums");
  return response?.data ? response?.data : response;
});

export { fetchAlbum };
