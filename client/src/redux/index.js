import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    setLogOut: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, { payload }) => {
      if (state.user) {
        state.user.friends = payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, { payload }) => {
      state.posts = payload.posts;
    },
    setPost: (state, { payload }) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === payload.post._id) return payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogOut, setFriends, setPosts, setPost } =
  authSlice.actions;

export default authSlice.reducer;
