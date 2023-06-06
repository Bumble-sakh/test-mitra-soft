import { IPost } from '../posts/types';
import { SET_DISPLAYED_POSTS, SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH, SET_SORT } from './actionTypes';
import { SortType } from './sortTypes';

export interface DisplayedPostsState {
  posts: IPost[];
  search: string;
  sort: SortType;
}

export interface SetDisplayedPostsPayload {
  posts: IPost[];
}

export interface SetSearchPayload {
  search: string;
}

export interface SetSortPayload {
  sort: SortType;
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

export type SetSort = {
  type: typeof SET_SORT;
  payload: SetSortPayload;
};

export type DisplayedPostsActions = SetDisplayedPosts | SetSearch | SetSort;
