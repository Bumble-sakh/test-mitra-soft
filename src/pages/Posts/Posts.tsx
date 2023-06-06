import { useEffect } from 'react';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchPostsRequest } from '../../store/posts/actions';
import Post from '../../components/Post';
import PostsBar from '../../components/PostsBar';

const Posts = () => {
  const { pending, error } = useAppSelector((state) => state.posts);
  const { posts } = useAppSelector((state) => state.displayedPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    posts.length === 0 && dispatch(fetchPostsRequest());
  }, [posts, dispatch]);

  return (
    <div className='d-flex flex-column'>
      <PostsBar />

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
