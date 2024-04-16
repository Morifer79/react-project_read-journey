import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const pending = state => {
  state.loading = true;
  state.error = '';
};
const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, { payload }) => {
          state.user = payload;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        pending
      )

      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
