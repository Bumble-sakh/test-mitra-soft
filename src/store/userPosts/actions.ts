import { FETCH_USER_POSTS_REQUEST, FETCH_USER_POSTS_FAILURE, FETCH_USER_POSTS_SUCCESS } from './actionTypes';
import {
  FetchUserPostsRequest,
  FetchUserPostsSuccess,
  FetchUserPostsSuccessPayload,
  FetchUserPostsFailure,
  FetchUserPostsFailurePayload,
  FetchUserPostsRequestPayload,
} from './types';

export const fetchUserPostsRequest = (payload: FetchUserPostsRequestPayload): FetchUserPostsRequest => ({
  type: FETCH_USER_POSTS_REQUEST,
  payload,
});

export const fetchUserPostsSuccess = (payload: FetchUserPostsSuccessPayload): FetchUserPostsSuccess => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload,
});

export const fetchUserPostsFailure = (payload: FetchUserPostsFailurePayload): FetchUserPostsFailure => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload,
});
