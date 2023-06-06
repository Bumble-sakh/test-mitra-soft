import { FC } from 'react';
import { Card, Image, Stack } from 'react-bootstrap';
import { IUser } from '../../store/user/types';
import phoneIcon from '../../assets/icons/phone.svg';
import mailIcon from '../../assets/icons/mail.svg';

type UserCardProps = {
  user: IUser;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <Card.Header>{user.username}</Card.Header>
      <Card.Body>
        <Card.Title>Имя: {user.name}</Card.Title>
        <Card.Text>Город: {user.address?.city}</Card.Text>
        <Card.Text>Адрес: {user.address?.street}</Card.Text>
        <Card.Text>Компания: {user.company?.name}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction='horizontal' gap={2}>
          <Image src={phoneIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
          <Card.Link href={`tel:${user.phone}`}>{user.phone}</Card.Link>
        </Stack>
        <Stack direction='horizontal' gap={2}>
          <Image src={mailIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
          <Card.Link href={`mailto:${user.email}`}>{user.email}</Card.Link>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
