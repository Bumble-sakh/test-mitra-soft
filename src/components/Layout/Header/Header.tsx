import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import ROUTES from '../../../configs/routes';
import Menu from './Menu/Menu';
import User from './User/User';

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' expand='true' collapseOnSelect={true}>
        <Container>
          <Navbar.Brand as={Link} to={ROUTES.index}>
            Тестовое
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          <Navbar.Offcanvas id='basic-navbar-nav' placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container className='h-100 d-flex flex-column justify-content-between'>
                <Menu />
                <User />
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
