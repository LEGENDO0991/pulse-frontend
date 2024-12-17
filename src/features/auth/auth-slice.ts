import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean,
  authenticatedUser: null | { email: string }
}

const initialState: AuthState = {
  isAuthenticated: false,
  authenticatedUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      console.log(action.payload)
      state.isAuthenticated = true
      state.authenticatedUser = action.payload
    },
    register: (state, action: PayloadAction<{ email: string }>) => {
      state.isAuthenticated = true
      state.authenticatedUser = action.payload
    },
    logout: (state) => {
      localStorage.setItem("token", '')
      state.isAuthenticated = false
      state.authenticatedUser = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions

export default authSlice.reducer