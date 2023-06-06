import { all, fork } from 'redux-saga/effects';

import postsSaga from './posts/sagas';
import commentsSaga from './comments/sagas';
import userSaga from './user/sagas';
import userPostsSaga from './userPosts/sagas';
import displayedPostsSaga from './displayedPosts/sagas';

export function* rootSaga() {
  yield all([fork(postsSaga), fork(commentsSaga), fork(userSaga), fork(userPostsSaga), fork(displayedPostsSaga)]);
}
