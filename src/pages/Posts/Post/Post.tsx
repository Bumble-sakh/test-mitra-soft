import { FC, useState } from 'react';
import { IPost } from '../../../store/posts/types';
import { Alert, Button, Card, Image, Nav, Spinner, Stack } from 'react-bootstrap';
import avatar from '../../../assets/icons/avatar.svg';
import ROUTES from '../../../configs/routes';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchCommentsRequest } from '../../../store/comments/actions';
import Comment from '../Comment';
import { postCommentsState } from '../../../store/comments/types';

type PostProps = {
  post: IPost;
};

const initialState: postCommentsState = {
  pending: false,
  comments: [],
  error: null,
};

const Post: FC<PostProps> = ({ post }) => {
  const postId = post.id;
  const allComments = useAppSelector((state) => state.comments);
  const { pending, comments, error } = allComments[postId] || initialState;
  const dispatch = useAppDispatch();

  const [commentsIsShow, switchCommentsIsShow] = useState(false);
  const isComments = Boolean(comments?.length);

  const commentsHandler = () => {
    switchCommentsIsShow((prev) => !prev);
    !isComments && dispatch(fetchCommentsRequest({ postId }));
  };

  return (
    <Card>
      <Card.Header>
        <Nav.Link as={Link} to={ROUTES.user} className='d-inline-flex'>
          <Image src={avatar} roundedCircle style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        </Nav.Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title} </Card.Title>
        <Card.Text>{post.body}</Card.Text>

        {pending ? (
          <Button disabled>
            <Stack direction='horizontal' gap={2}>
              <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
              <span>Комментарии</span>
            </Stack>
          </Button>
        ) : (
          <Button onClick={commentsHandler}>Комментарии</Button>
        )}

        {error && (
          <Alert variant='danger' className='my-2'>
            Error: {error}
          </Alert>
        )}
        {!pending && !error && commentsIsShow && (
          <Stack gap={2} className='my-2'>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

export default Post;
