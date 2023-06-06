import { SET_DISPLAYED_POSTS, SET_SEARCH, SET_SORT } from './actionTypes';

import { DisplayedPostsState, DisplayedPostsActions } from './types';

const initialState: DisplayedPostsState = {
  posts: [],
  search: '',
  sort: null,
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
    case SET_SORT:
      return {
        ...state,
        sort: action.payload.sort,
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayedPostsReducer;
