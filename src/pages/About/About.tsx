import myPhoto from '../../assets/images/myPhoto.jpg';
import phoneIcon from '../../assets/icons/userPhone.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import githubIcon from '../../assets/icons/github.svg';
import { Col, Container, Row, Badge, Stack } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container>
        <Row className='mb-4'>
          <Col xs={{ order: 1 }} md={{ order: 0 }}>
            <Stack gap={2}>
              <h3>Асессоров Игорь</h3>
              <h4>Контакты:</h4>
              <a href='tel:79242812565' target='_blank' rel='noreferrer'>
                <img
                  src={phoneIcon}
                  alt='phoneIcon'
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                  }}
                />
                +7 (924) 281-25-65
              </a>
              <a href='https://t.me/Bumble_sakh' target='_blank' rel='noreferrer'>
                <img
                  src={telegramIcon}
                  alt='telegramIcon'
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                  }}
                />
                https://t.me/Bumble_sakh
              </a>
              <a href='https://github.com/Bumble-sakh' target='_blank' rel='noreferrer'>
                <img
                  src={githubIcon}
                  alt='githubIcon'
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                  }}
                />
                https://github.com/Bumble-sakh
              </a>
            </Stack>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-md-end justify-content-center justify-content-sm-start'>
            <img src={myPhoto} alt='Photography' />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <p>
              До 2022 года я приобретал больше опыт работы в продажах, коммерческой недвижимости и маркетинге. Однако
              сейчас я хочу полностью сменить свою сферу деятельности и заниматься разработкой.
            </p>
            <p>
              За достаточно короткий промежуток времени я приобрел много знаний, навыков и опыта в области Front-end
              разработки. Сейчас углубляюсь в сторону изучения технологий и расширяю свою экспертность.
            </p>
            <p>
              Не боюсь браться за совершенно новые проекты и погружаться в них с головой. Могу быстро с нуля разобраться
              в совершенно незнакомых мне вопросах и найти нестандартное технологическое решение.
            </p>
            <p>
              Я достаточно осознанно подошел к смене карьерного направления, поэтому готов прикладывать максимум усилий
              в работе. Сейчас ищу место работы для более прикладного применения своих навыков в области разработки.
            </p>
            <p>
              Работал в команде над созданием{' '}
              <a href='https://rslang-bumble-sakh.netlify.app/#/' target='_blank' rel='noreferrer'>
                приложения для изучения английских слов
              </a>
            </p>
            <p>
              Работал в команде над созданием{' '}
              <a href='https://gleeful-arithmetic-daffb3.netlify.app/#/' target='_blank' rel='noreferrer'>
                приложения канбан-доски
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='d-flex flex-wrap justify-content-start' style={{ gap: 5 }}>
              <span>Стек технологий:</span>
              <Badge bg='success'>React</Badge>
              <Badge bg='success'>Redux</Badge>
              <Badge bg='success'>RTK</Badge>
              <Badge bg='success'>RTK Query</Badge>
              <Badge bg='success'>Redux Saga</Badge>
              <Badge bg='success'>Java Script</Badge>
              <Badge bg='success'>Type Script</Badge>
              <Badge bg='success'>Material UI</Badge>
              <Badge bg='success'>Bootstrap</Badge>
              <Badge bg='success'>HTML</Badge>
              <Badge bg='success'>CSS</Badge>
              <Badge bg='success'>SCSS</Badge>
              <Badge bg='success'>Git</Badge>
              <Badge bg='success'>GitHub</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
