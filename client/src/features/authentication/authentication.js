import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authentication",
    initialState: { login : false },
    reducers: {
        LOG_IN : (state, action) => {
            state.login = true;
        }
    }
});

export const { LOG_IN, LOG_OUT } = authSlice.actions;

export default authSlice.reducer;