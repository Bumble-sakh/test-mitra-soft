import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './actionTypes';

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof FETCH_POSTS_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof FETCH_POSTS_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions = FetchPostsRequest | FetchPostsSuccess | FetchPostsFailure;
