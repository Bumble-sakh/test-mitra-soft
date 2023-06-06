import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { fetchCommentsFailure, fetchCommentsSuccess } from './actions';
import { FETCH_COMMENTS_REQUEST } from './actionTypes';
import { FetchCommentsRequest, IComment } from './types';
import delay from '../../utils/delay';
import SECONDS from '../../configs/delay';

const getComments = (postId: number) =>
  axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);

function* fetchCommentsSaga({ payload }: FetchCommentsRequest) {
  const { postId } = payload;

  yield delay(SECONDS);

  try {
    const response: AxiosResponse<IComment[], any> = yield call(getComments, postId);
    yield put(
      fetchCommentsSuccess({
        postId,
        comments: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchCommentsFailure({
        postId,
        error: e.message,
      })
    );
  }
}

function* commentsSaga() {
  yield all([takeEvery(FETCH_COMMENTS_REQUEST, fetchCommentsSaga)]);
}

export default commentsSaga;
