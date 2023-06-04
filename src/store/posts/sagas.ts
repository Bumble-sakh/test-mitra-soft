import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPostsFailure, fetchPostsSuccess } from './actions';
import { FETCH_POSTS_REQUEST } from './actionTypes';
import { IPost } from './types';

const getPosts = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

/*
  Worker Saga: Fired on FETCH_Posts_REQUEST action
*/
function* fetchPostsSaga() {
  try {
    const response: AxiosResponse<IPost[], any> = yield call(getPosts);
    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_POSTS_REQUEST` action.
  Allows concurrent increments.
*/
function* postsSaga() {
  yield all([takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
