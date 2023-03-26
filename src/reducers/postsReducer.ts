import { createSlice } from '@reduxjs/toolkit';
import postsService from '../services/posts';

const initialState = [];
const postsSlice = createSlice({
  name:'posts',
  initialState,
  reducers: {
    setPosts(state,action){
      return action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const initPosts = () => {
  return async dispatch => {
    const posts = await postsService.getAll();

    dispatch(setPosts(posts));
  };
};

export default postsSlice.reducer;
