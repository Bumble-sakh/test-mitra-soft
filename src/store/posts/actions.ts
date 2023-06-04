import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from './actionTypes';
import {
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
  FetchPostsFailure,
  FetchPostsFailurePayload,
} from './types';

export const fetchPostsRequest = (): FetchPostsRequest => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (payload: FetchPostsSuccessPayload): FetchPostsSuccess => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (payload: FetchPostsFailurePayload): FetchPostsFailure => ({
  type: FETCH_POSTS_FAILURE,
  payload,
});
