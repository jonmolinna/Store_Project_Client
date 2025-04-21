import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { Profile } from "../../interface/profile.interface";

// GET PROFILE
export const fetchProfile = createAsyncThunk<
  Profile,
  AxiosInstance,
  { rejectValue: string }
>("auth/fetchProfile", async (axiosPrivate, thunkApi) => {
  try {
    const response = await axiosPrivate.get("auth/profile");
    return response.data;
  } catch (error) {
    console.log("error --> ", error);
  }
});
