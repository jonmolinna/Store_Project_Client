import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/features/auth/authSlicer"
import profileReducer from "../modules/auth/features/profile/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch