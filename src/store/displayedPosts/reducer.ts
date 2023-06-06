import { SET_DISPLAYED_POSTS } from './actionTypes';

import { DisplayedPostsState, DisplayedPostsActions } from './types';

const initialState: DisplayedPostsState = {
  posts: [],
};

const displayedPostsReducer = (state = initialState, action: DisplayedPostsActions) => {
  switch (action.type) {
    case SET_DISPLAYED_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayedPostsReducer;
