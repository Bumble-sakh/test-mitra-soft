import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH, SET_SORT } from './actionTypes';
import {
  SetDisplayedPostsPayload,
  SetDisplayedPostsRequest,
  SetDisplayedPosts,
  SetSearchPayload,
  SetSearch,
  SetSortPayload,
  SetSort,
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

export const setSort = (payload: SetSortPayload): SetSort => ({
  type: SET_SORT,
  payload,
});
