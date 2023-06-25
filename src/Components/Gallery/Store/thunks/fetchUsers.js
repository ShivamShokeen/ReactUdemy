import {
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("user/fetch", async () => {
  const response = await axios.get("http://127.0.0.1:3001/users");
  return response?.data ? response?.data : response;
});

export { fetchUsers };
