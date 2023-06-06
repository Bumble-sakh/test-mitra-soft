import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST } from './actionTypes';
import { SetDisplayedPostsPayload, SetDisplayedPostsRequest } from './types';
import { SetDisplayedPosts } from './types';

export const setDisplayedPostsRequest = (): SetDisplayedPostsRequest => ({
  type: SET_DISPLAYED_POSTS_REQUEST,
});

export const setDisplayedPosts = (payload: SetDisplayedPostsPayload): SetDisplayedPosts => ({
  type: SET_DISPLAYED_POSTS,
  payload,
});
