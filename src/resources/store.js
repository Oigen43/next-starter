import router from 'next/router';
import { configureStore } from '@reduxjs/toolkit';

import posts from './posts/posts.slice';

export default configureStore({
  reducer: {
    posts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: { extraArgument: { router } },
  }),
});
