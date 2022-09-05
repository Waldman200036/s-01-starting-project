import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  showProfile: false,
};

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    setProfileStatus(state, action) {
      state.showProfile = action.payload;
    },
    // Flag to show or not show profile
    toggleProfile: (state) => {
      state.showProfile = !state.showProfile;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuthenticated = (state) => state.auth.isAuthenticated;
export const selectProfileStatus = (state) => state.auth.showProfile;

// Could also use instead and include all by default
export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
