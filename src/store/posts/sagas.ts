import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPostsFailure, fetchPostsSuccess } from './actions';
import { FETCH_POSTS_REQUEST } from './actionTypes';
import { IPost } from './types';
import delay from '../../utils/delay';
import SECONDS from '../../configs/delay';

const getPosts = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');

function* fetchPostsSaga() {
  yield delay(SECONDS);

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

function* postsSaga() {
  yield all([takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
