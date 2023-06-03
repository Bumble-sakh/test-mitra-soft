import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ROUTES from '../../../../configs/routes';

const Menu = () => {
  return (
    <Nav>
      <Nav.Link eventKey='i' as={Link} to={ROUTES.posts}>
        Посты
      </Nav.Link>
      <Nav.Link eventKey='i' as={Link} to={ROUTES.about}>
        Обо мне
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
