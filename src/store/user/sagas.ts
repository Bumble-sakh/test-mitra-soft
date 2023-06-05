import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserFailure, fetchUserSuccess } from './actions';
import { FETCH_USER_REQUEST } from './actionTypes';
import { FetchUserRequest, IUser } from './types';
import delay from '../../utils/delay';

const getUser = (userId: number) => axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users/${userId}`);

function* fetchUserSaga({ payload }: FetchUserRequest) {
  const { userId } = payload;

  yield delay(3);

  try {
    const response: AxiosResponse<IUser, any> = yield call(getUser, userId);
    yield put(
      fetchUserSuccess({
        user: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message,
      })
    );
  }
}

function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
