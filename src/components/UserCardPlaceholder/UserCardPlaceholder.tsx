import { Card, Placeholder } from 'react-bootstrap';

const UserCardPlaceholder = () => {
  return (
    <Card>
      <Card.Header>
        <Placeholder animation='wave'>
          <Placeholder xs={6} />
        </Placeholder>
      </Card.Header>
      <Card.Body>
        <Placeholder as={Card.Title} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={3} /> <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={5} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={4} /> <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
      <Card.Footer>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder xs={1} /> <Placeholder xs={6} />
        </Placeholder>
      </Card.Footer>
    </Card>
  );
};

export default UserCardPlaceholder;
