import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateUser = createAsyncThunk("user/update", async (payload) => {
  const response = await axios.put("http://127.0.0.1:3001/users", payload);
  return response?.data ? response?.data : response;
});

export { updateUser };
