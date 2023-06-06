import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH } from './actionTypes';
import {
  SetDisplayedPostsPayload,
  SetDisplayedPostsRequest,
  SetDisplayedPosts,
  SetSearchPayload,
  SetSearch,
} from './types';
import {} from './types';

export const setDisplayedPostsRequest = (): SetDisplayedPostsRequest => ({
  type: SET_DISPLAYED_POSTS_REQUEST,
});

export const setDisplayedPosts = (payload: SetDisplayedPostsPayload): SetDisplayedPosts => ({
  type: SET_DISPLAYED_POSTS,
  payload,
});

export const setSearch = (payload: SetSearchPayload): SetSearch => ({
  type: SET_SEARCH,
  payload,
});
