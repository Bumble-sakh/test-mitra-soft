import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return <div>Пользователь: {id}</div>;
};

export default User;
