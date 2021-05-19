import { createSlice } from '@reduxjs/toolkit';

import * as api from './posts.api';

const initialState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => action.payload.posts,
  },
});

const { setPosts } = postsSlice.actions;

const fetchPosts = () => async (dispatch) => {
  const posts = await api.list();
  dispatch(setPosts({ posts }));
};

export const postsActions = {
  setPosts,
  fetchPosts,
};

export default postsSlice.reducer;
