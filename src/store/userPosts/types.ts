import { IPost } from '../posts/types';
import { FETCH_USER_POSTS_REQUEST, FETCH_USER_POSTS_SUCCESS, FETCH_USER_POSTS_FAILURE } from './actionTypes';

export interface UserPostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchUserPostsRequestPayload {
  userId: number;
}

export interface FetchUserPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchUserPostsFailurePayload {
  error: string;
}

export interface FetchUserPostsRequest {
  type: typeof FETCH_USER_POSTS_REQUEST;
  payload: FetchUserPostsRequestPayload;
}

export type FetchUserPostsSuccess = {
  type: typeof FETCH_USER_POSTS_SUCCESS;
  payload: FetchUserPostsSuccessPayload;
};

export type FetchUserPostsFailure = {
  type: typeof FETCH_USER_POSTS_FAILURE;
  payload: FetchUserPostsFailurePayload;
};

export type UserPostsActions = FetchUserPostsRequest | FetchUserPostsSuccess | FetchUserPostsFailure;
