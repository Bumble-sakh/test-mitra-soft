import { Button, Image, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import undoIcon from '../../assets/icons/undo.svg';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button style={{ width: '100px' }} onClick={() => navigate(-1)}>
      <Stack direction='horizontal' gap={2}>
        <Image src={undoIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
        <span>Назад</span>
      </Stack>
    </Button>
  );
};

export default BackButton;
