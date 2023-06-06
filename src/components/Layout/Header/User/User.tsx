import { Row, Col, Image } from 'react-bootstrap';

import photo from '../../../../assets/images/myPhoto.jpg';

const User = () => {
  return (
    <Row className='align-items-center mb-5'>
      <Col sm={5}>
        <Image src={photo} roundedCircle style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
      </Col>
      <Col sm={7}>
        <h5 className='h5'>Асессоров Игорь</h5>
        <a href='mailto:igor.asessorov@gmail.com'>igor.asessorov@gmail.com</a>
      </Col>
    </Row>
  );
};

export default User;
