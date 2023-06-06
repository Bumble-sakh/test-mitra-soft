import { FC } from 'react';
import { IComment } from '../../store/comments/types';
import { Card } from 'react-bootstrap';

type CommentProps = {
  comment: IComment;
};

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <Card>
      <Card.Header>{comment.email}</Card.Header>
      <Card.Body>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
