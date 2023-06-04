import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './actionTypes';

import { CommentsActions, CommentsState } from './types';

const initialState: CommentsState = {};

const commentsReducer = (state = initialState, action: CommentsActions) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        [action.payload.postId]: { pending: true, comments: state[action.payload.postId]?.comments, error: null },
      } as CommentsState;
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        [action.payload.postId]: { pending: false, comments: action.payload.comments, error: null },
      } as CommentsState;
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        [action.payload.postId]: { pending: false, comments: [], error: action.payload.error },
      } as CommentsState;
    default:
      return {
        ...state,
      } as CommentsState;
  }
};

export default commentsReducer;
