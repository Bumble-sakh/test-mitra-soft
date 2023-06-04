import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <div>
      <Header />
      <Container className='my-5'>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
