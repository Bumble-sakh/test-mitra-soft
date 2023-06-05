import { all, fork } from 'redux-saga/effects';

import postsSaga from './posts/sagas';
import commentsSaga from './comments/sagas';
import userSaga from './user/sagas';

export function* rootSaga() {
  yield all([fork(postsSaga), fork(commentsSaga), fork(userSaga)]);
}
