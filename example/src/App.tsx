import React from 'react';

import { Row, Heading, Container, Label, Button } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return (
    <>
      <Container>
        <Row col={9} mt={8}>
          <Label type='2' ml={5}>
            Di-live
          </Label>
          <Label type='4' ml={2} mr={4}>
            Get
          </Label>
          <Heading type='h4' font='semibold' display={'inline'}>
            Lớp học Livestream
          </Heading>
          <Row mt={8}>
            <Row col={4} col-md={6} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
                <Row mt={10} mb={10}>
                  <p>ABC</p>
                  <p>ABC</p>
                </Row>
                <Button type={'1'}>DI-LIVE</Button>
              </Row>
            </Row>
            <Row col={4} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
                <Row mt={10} mb={10}>
                  <p>ABC</p>
                  <p>ABC</p>
                </Row>
                <Row>
                  <Row col={5} pt={6}>
                    <Heading type='note' font='regular' color='primary'>
                      <a href='/'>Slide bài giảng</a>
                    </Heading>
                  </Row>
                  <Row col={7}>
                    <Button type={'1'}>Vào lớp DI-LIVE</Button>
                  </Row>
                </Row>
              </Row>
            </Row>
            <Row col={4} pl={5} pr={5}>
              <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
                <Heading type='body' font='semibold'>
                  Bài 51: Chia một số tự nhiên cho một số thập phân. Chia một số
                  thập ph...
                </Heading>
                <Row mt={10} mb={10}>
                  <p>ABC</p>
                  <p>ABC</p>
                </Row>
                <Row>
                  <Row col={5} pt={6}>
                    <Heading type='note' font='regular' color='primary'>
                      <a href='/'>Slide bài giảng</a>
                    </Heading>
                  </Row>
                  <Row col={7}>
                    <Button type={'1'}>Vào lớp DI-LIVE</Button>
                  </Row>
                </Row>
              </Row>
            </Row>
          </Row>
        </Row>
        <Row col={3} mt={8}>
          <Label type='5' ml={5} mr={4}>
            Sóc
          </Label>
          <Heading type='h4' font='semibold' display={'inline'}>
            Quà tặng yêu thích
          </Heading>
          <Row pl={5} pr={5} mt={8}>
            <Row bg={'white'} pt={10} pb={10} pr={10} pl={10} br={5}>
              A1
            </Row>
          </Row>
          <Row pl={5} pr={5} mt={8}>
            <Label type='3' mr={4}>
              Mission
            </Label>
            <Heading type='h4' font='semibold' display={'inline'}>
              Bảng xếp hạng
            </Heading>
            <Row bg={'white'} mt={10} pt={10} pb={10} pr={10} pl={10} br={5}>
              A1
            </Row>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default App;
