import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../interface/auth.interface";
import { fetchAuthentication } from "./authApi";

const initialState: AuthState = {
  token: "",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addRefreshToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthentication.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuthentication.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(fetchAuthentication.rejected, (state, action) => {
        state.loading = false;
        state.error = { id: Date.now(), message: action.payload as string };
      });
  },
});

export const { addRefreshToken } = authSlice.actions;
export default authSlice.reducer;
