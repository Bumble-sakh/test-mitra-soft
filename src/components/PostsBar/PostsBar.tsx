import { Form, Stack, Button, Image } from 'react-bootstrap';
import sortIcon from '../../assets/icons/sort.svg';
import searchIcon from '../../assets/icons/search.svg';

const PostsBar = () => {
  return (
    <Form>
      <div className='d-flex mb-4 gap-2 flex-sm-nowrap flex-wrap '>
        <Form.Control type='search' className='me-auto' placeholder='Поиск по заголовкам...' />
        <Button variant='success' type='submit'>
          <Stack direction='horizontal' gap={2}>
            <Image src={searchIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
            <span>Найти</span>
          </Stack>
        </Button>

        <Button variant='secondary'>
          <Image src={sortIcon} style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
        </Button>
      </div>
    </Form>
  );
};

export default PostsBar;
