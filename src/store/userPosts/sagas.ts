import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserPostsFailure, fetchUserPostsSuccess } from './actions';
import { FETCH_USER_POSTS_REQUEST } from './actionTypes';

import delay from '../../utils/delay';
import { IPost } from '../posts/types';
import { FetchUserPostsRequest } from './types';

const getUserPosts = (userId: number) =>
  axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

function* fetchUserPostsSaga({ payload }: FetchUserPostsRequest) {
  const { userId } = payload;

  yield delay(3);

  try {
    const response: AxiosResponse<IPost[], any> = yield call(getUserPosts, userId);
    yield put(
      fetchUserPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUserPostsFailure({
        error: e.message,
      })
    );
  }
}

function* userPostsSaga() {
  yield all([takeLatest(FETCH_USER_POSTS_REQUEST, fetchUserPostsSaga)]);
}

export default userPostsSaga;
