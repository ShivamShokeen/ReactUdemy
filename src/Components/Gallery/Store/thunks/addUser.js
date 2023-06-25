import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("user/add", async (payload) => {
  const response = await axios.post("http://127.0.0.1:3001/users", payload);
  return response?.data ? response?.data : response;
});

export { addUser };
