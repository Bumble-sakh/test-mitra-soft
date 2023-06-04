import { FC } from 'react';
import { IPost } from '../../../store/posts/types';
import { Button, Card, Image, Stack } from 'react-bootstrap';
import avatar from '../../../assets/icons/avatar.svg';

type PostProps = {
  post: IPost;
};

const Post: FC<PostProps> = ({ post }) => {
  return (
    <Card>
      <Card.Header>
        <Stack direction='horizontal' gap={3}>
          <Image src={avatar} roundedCircle style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
          <span>Асессоров Игорь</span>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title} </Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button>Комментарии</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
