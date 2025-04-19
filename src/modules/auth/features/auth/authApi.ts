import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../settings/axios.";
import { AuhtResponse } from "../../interface/auth.interface";

// GET TOKEN
export const fetchAuthentication = createAsyncThunk(
  "auth/fetchAuthentication",
  async (form, thunkApi) => {
    try {
      const response = await api.post("auth/login", form);
      const data = response.data as AuhtResponse;
      return data.access_token;
    } catch (error: any) {
      if (error.status === 401) {
        return thunkApi.rejectWithValue("Credenciales son incorrectas");
      }

      return thunkApi.rejectWithValue("Ocurrió un error");
    }
  }
);

// GET REFRESH TOKEN
export const fetchRefreshToken = createAsyncThunk(
  "auth/refresh-token",
  async () => {
    try {
    } catch (error) {}
  }
);
