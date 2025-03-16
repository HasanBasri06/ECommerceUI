import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginBox: false,
    registerBox: false,
    auth: false,
    authUser: []
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

        addAuthUser(state) {
            state.auth = true
            state.loginBox = false
            state.registerBox = false;
        },

        removeAuthUser(state) {
            state.auth = false
        }
    }
})

export const {openLoginBox, closeLoginBox, openRegisterBox, closeRegisterBox, addAuthUser, removeAuthUser} = authSlice.actions
export default authSlice.reducer