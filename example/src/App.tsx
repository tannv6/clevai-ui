import React from 'react';

import { Row, Icon, Heading, Container } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return (
    <>
      <Icon size='xl' color='primary' type='fb' />
      <Heading type='h4' font='semibold'>
        Lớp học livestream
      </Heading>
      <Container>
        <Row col={9} mt={8}>
          <Row>
            <Row col={4} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
              </Row>
            </Row>
            <Row col={4} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
              </Row>
            </Row>
            <Row col={4} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
              </Row>
            </Row>
          </Row>
        </Row>
        <Row col={3} mt={8}>
          <Row pl={5} pr={5}>
            <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
              A1
            </Row>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default App;
