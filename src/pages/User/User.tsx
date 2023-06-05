import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Spinner, Stack } from 'react-bootstrap';
import { fetchUserRequest } from '../../store/user/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Post from '../../components/Post/Post';
import { fetchUserPostsRequest } from '../../store/userPosts/actions';
import UserCard from '../../components/UserCard/UserCard';
import UserCardPlaceholder from '../../components/UserCardPlaceholder/UserCardPlaceholder';
import BackButton from '../../components/BackButton';

const User = () => {
  const { id } = useParams();
  const userId = Number(id);

  const { pending: pendingUser, user, error: errorUser } = useAppSelector((state) => state.user);
  const { pending: pendingPosts, posts, error: errorPosts } = useAppSelector((state) => state.userPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserRequest({ userId }));
      dispatch(fetchUserPostsRequest({ userId }));
    }
  }, [dispatch, userId]);

  return (
    <Stack gap={4}>
      <BackButton />

      {pendingUser && <UserCardPlaceholder />}

      {errorUser && <Alert variant='danger'>Error: {errorUser}</Alert>}

      {!pendingUser && !errorUser && <UserCard user={user} />}

      {pendingPosts && (
        <Spinner animation='border' variant='primary' role='status' className='align-self-center'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}

      {!pendingPosts && !errorPosts && (
        <Stack gap={2}>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default User;
