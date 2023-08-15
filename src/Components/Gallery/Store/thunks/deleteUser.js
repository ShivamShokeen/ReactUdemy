import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("user/delete", async (id) => {
  const response = await axios.delete("http://127.0.0.1:3001/users/delete/"+ id);
  return response.data ? response.data : [];
});

export { deleteUser };
