import { SET_DISPLAYED_POSTS, SET_SEARCH } from './actionTypes';

import { DisplayedPostsState, DisplayedPostsActions } from './types';

const initialState: DisplayedPostsState = {
  posts: [],
  search: '',
};

const displayedPostsReducer = (state = initialState, action: DisplayedPostsActions) => {
  switch (action.type) {
    case SET_DISPLAYED_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayedPostsReducer;
