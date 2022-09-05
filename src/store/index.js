import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import postsReducer from "../redux/features/posts/postsSlice";
import authReducer from "../redux/features/authenticate/authenticateSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    auth: authReducer,
  },
});
export default store;
