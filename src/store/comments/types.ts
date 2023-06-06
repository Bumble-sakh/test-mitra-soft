import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './actionTypes';

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface postCommentsState {
  pending: boolean;
  comments: IComment[];
  error: string | null;
}

export type CommentsState = Record<number, postCommentsState>;

export interface FetchCommentsRequestPayload {
  postId: number;
}

export interface FetchCommentsSuccessPayload {
  postId: number;
  comments: IComment[];
}

export interface FetchCommentsFailurePayload {
  postId: number;
  error: string;
}

export interface FetchCommentsRequest {
  type: typeof FETCH_COMMENTS_REQUEST;
  payload: FetchCommentsRequestPayload;
}

export type FetchCommentsSuccess = {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: FetchCommentsSuccessPayload;
};

export type FetchCommentsFailure = {
  type: typeof FETCH_COMMENTS_FAILURE;
  payload: FetchCommentsFailurePayload;
};

export type CommentsActions = FetchCommentsRequest | FetchCommentsSuccess | FetchCommentsFailure;
