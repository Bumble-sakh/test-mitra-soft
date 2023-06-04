import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS } from './actionTypes';
import {
  FetchCommentsRequest,
  FetchCommentsSuccess,
  FetchCommentsSuccessPayload,
  FetchCommentsFailure,
  FetchCommentsFailurePayload,
  FetchCommentsRequestPayload,
} from './types';

export const fetchCommentsRequest = (payload: FetchCommentsRequestPayload): FetchCommentsRequest => ({
  type: FETCH_COMMENTS_REQUEST,
  payload,
});

export const fetchCommentsSuccess = (payload: FetchCommentsSuccessPayload): FetchCommentsSuccess => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload,
});

export const fetchCommentsFailure = (payload: FetchCommentsFailurePayload): FetchCommentsFailure => ({
  type: FETCH_COMMENTS_FAILURE,
  payload,
});
