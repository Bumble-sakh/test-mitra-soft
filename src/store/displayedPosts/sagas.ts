import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { setDisplayedPosts } from './actions';
import { SET_DISPLAYED_POSTS_REQUEST } from './actionTypes';
import { IPost, PostsState } from '../posts/types';

const setPosts = (posts: IPost[]) => {
  const result = [...posts];

  //TODO: Фильтуем

  return result;
};

function* setPostsSaga() {
  const store: PostsState = yield select((state) => state.posts);

  const posts: IPost[] = yield call(setPosts, store.posts);

  yield put(setDisplayedPosts({ posts }));
}

function* displayedPostsSaga() {
  yield all([takeLatest(SET_DISPLAYED_POSTS_REQUEST, setPostsSaga)]);
}

export default displayedPostsSaga;
