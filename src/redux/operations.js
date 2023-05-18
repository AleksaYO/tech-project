import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6464cfc5043c103502c3a34d.mockapi.io/api/v1";

export const fetchCard = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/user");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
