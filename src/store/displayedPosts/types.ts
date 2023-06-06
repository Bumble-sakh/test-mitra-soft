import { IPost } from '../posts/types';
import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST } from './actionTypes';

export interface DisplayedPostsState {
  posts: IPost[];
}

export interface SetDisplayedPostsPayload {
  posts: IPost[];
}

export type SetDisplayedPostsRequest = {
  type: typeof SET_DISPLAYED_POSTS_REQUEST;
};

export type SetDisplayedPosts = {
  type: typeof SET_DISPLAYED_POSTS;
  payload: SetDisplayedPostsPayload;
};

export type DisplayedPostsActions = SetDisplayedPosts;
