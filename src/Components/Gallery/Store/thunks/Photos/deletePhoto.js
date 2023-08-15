import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deletePhoto = createAsyncThunk("photo/delete", async (payload) => {
  let response = await axios.post("http://127.0.0.1:3001/photos/"+ payload);
  return response?.data ? response?.data : response;
});

export { deletePhoto };
