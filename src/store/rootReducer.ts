import { combineReducers } from 'redux';

import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import userReducer from './user/reducer';
import userPostsReducer from './userPosts/reducer';
import displayedPostsReducer from './displayedPosts/reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
  userPosts: userPostsReducer,
  displayedPosts: displayedPostsReducer,
});

export default rootReducer;
