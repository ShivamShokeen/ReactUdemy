import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteAlbum = createAsyncThunk("album/delete", async (payload) => {
  let response = await axios.delete("http://127.0.0.1:3001/albums."+ payload);
  return response?.data ? response?.data : response;
});

export { deleteAlbum };
