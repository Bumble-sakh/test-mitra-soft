import { FC } from 'react';
import { IPost } from '../../../store/posts/types';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import avatar from '../../../assets/icons/avatar.svg';
import ROUTES from '../../../configs/routes';
import { Link } from 'react-router-dom';

type PostProps = {
  post: IPost;
};

const Post: FC<PostProps> = ({ post }) => {
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
        <Button>Комментарии</Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
