import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../../interface/profile.interface";
import { fetchProfile } from "./profileApi";

const initialState: ProfileState = {
    profile: null,
    loading: 'idle',
    error: null,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = 'succeeded'
                state.profile = action.payload
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = 'failed'
            })
    }
})

export default profileSlice.reducer
