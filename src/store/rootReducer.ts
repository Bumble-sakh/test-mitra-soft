import { combineReducers } from 'redux';

import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import userReducer from './user/reducer';
import userPostsReducer from './userPosts/reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
  userPosts: userPostsReducer,
});

export default rootReducer;
