import { IPost } from '../posts/types';
import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH } from './actionTypes';

export interface DisplayedPostsState {
  posts: IPost[];
  search: string;
}

export interface SetDisplayedPostsPayload {
  posts: IPost[];
}

export interface SetSearchPayload {
  search: string;
}

export type SetDisplayedPostsRequest = {
  type: typeof SET_DISPLAYED_POSTS_REQUEST;
};

export type SetDisplayedPosts = {
  type: typeof SET_DISPLAYED_POSTS;
  payload: SetDisplayedPostsPayload;
};

export type SetSearch = {
  type: typeof SET_SEARCH;
  payload: SetSearchPayload;
};

export type DisplayedPostsActions = SetDisplayedPosts | SetSearch;
