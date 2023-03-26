import postsReducer from './reducers/postsReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    posts:postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});


export default store;
