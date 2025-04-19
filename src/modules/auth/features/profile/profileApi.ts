import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPrivate } from "../../../../settings/axios.";

// GET PROFILE
export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, thunkApi) => {
    try {
      const response = await apiPrivate.get("auth/profile");
      const data = response.data;
      console.log("PROFILE 1 --> ", data);
    } catch (error) {
      console.log("error --> ", error);
    }
  }
);
