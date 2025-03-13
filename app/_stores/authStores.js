import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginBox: false,
    registerBox: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        openLoginBox(state) {
            state.registerBox = false
            state.loginBox = true
        },

        closeLoginBox(state) {
            state.loginBox = false
        },

        openRegisterBox(state) {
            state.loginBox = false
            state.registerBox = true
        },

        closeRegisterBox(state) {
            state.registerBox = false
        },
    }
})

export const {openLoginBox, closeLoginBox, openRegisterBox, closeRegisterBox} = authSlice.actions
export default authSlice.reducer