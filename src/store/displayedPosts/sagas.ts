import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { setDisplayedPosts } from './actions';
import { SET_DISPLAYED_POSTS_REQUEST, SET_SEARCH, SET_SORT } from './actionTypes';
import { IPost } from '../posts/types';
import { RootState } from '..';
import { SORT_ASC, SORT_DESC, SortType } from './sortTypes';

interface SetPostsParams {
  posts: IPost[];
  search: string;
  sort: SortType;
}

const setPosts = ({ posts, search, sort }: SetPostsParams) => {
  let result = [...posts];

  result = result.filter((post) => post.title.includes(search));

  switch (sort) {
    case SORT_ASC:
      result = result.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case SORT_DESC:
      result = result.sort((a, b) => a.title.localeCompare(b.title)).reverse();
      break;
    default:
      break;
  }

  return result;
};

function* setPostsSaga() {
  const store: RootState = yield select((state) => state);
  const params = {
    posts: store.posts.posts,
    search: store.displayedPosts.search,
    sort: store.displayedPosts.sort,
  };

  const posts: IPost[] = yield call(setPosts, params);

  yield put(setDisplayedPosts({ posts }));
}

function* displayedPostsSaga() {
  yield all([
    takeLatest(SET_DISPLAYED_POSTS_REQUEST, setPostsSaga),
    takeLatest(SET_SEARCH, setPostsSaga),
    takeLatest(SET_SORT, setPostsSaga),
  ]);
}

export default displayedPostsSaga;
