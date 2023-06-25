import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPhoto = createAsyncThunk("photo/fetch", async (payload) => {
  let response = await axios.post("http://127.0.0.1:3001/photos");
  return response?.data ? response?.data : response;
});

export { fetchPhoto };
