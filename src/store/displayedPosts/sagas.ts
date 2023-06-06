import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { setDisplayedPosts } from './actions';
import { SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH } from './actionTypes';
import { IPost } from '../posts/types';
import { RootState } from '..';

interface SetPostsParams {
  posts: IPost[];
  search: string;
}

const setPosts = ({ posts, search }: SetPostsParams) => {
  const result = posts.filter((post) => post.title.includes(search));

  return result;
};

function* setPostsSaga() {
  const store: RootState = yield select((state) => state);
  const params = {
    posts: store.posts.posts,
    search: store.displayedPosts.search,
  };

  const posts: IPost[] = yield call(setPosts, params);

  yield put(setDisplayedPosts({ posts }));
}

function* displayedPostsSaga() {
  yield all([takeLatest(SET_DISPLAYED_POSTS_REQUEST, setPostsSaga), takeLatest(SET_SEARCH, setPostsSaga)]);
}

export default displayedPostsSaga;
