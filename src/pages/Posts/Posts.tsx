import { useEffect } from 'react';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchPostsRequest } from '../../store/posts/actions';
import Post from './Post';

const Posts = () => {
  const { pending, posts, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div className='d-flex flex-column'>
      {pending && (
        <Spinner animation='border' variant='primary' role='status' className='align-self-center'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}

      {error && <Alert variant='danger'>Error: {error}</Alert>}

      <Stack gap={2}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
    </div>
  );
};

export default Posts;
