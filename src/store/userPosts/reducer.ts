import { FETCH_USER_POSTS_REQUEST, FETCH_USER_POSTS_SUCCESS, FETCH_USER_POSTS_FAILURE } from './actionTypes';

import { UserPostsActions, UserPostsState } from './types';

const initialState: UserPostsState = {
  pending: false,
  posts: [],
  error: null,
};

const userPostsReducer = (state = initialState, action: UserPostsActions) => {
  switch (action.type) {
    case FETCH_USER_POSTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    case FETCH_USER_POSTS_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userPostsReducer;
