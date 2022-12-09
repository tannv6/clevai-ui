import React from 'react';

import { ExampleButton, CircleIcon, Heading } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return (
    <>
      <h3>Lớp học livestream</h3>
      <ExampleButton text='AnhLH' type='type-2' />
      <CircleIcon size='xs' color='gray' />
      <Heading type='h4' font='semibold'>
        Lớp học livestream
      </Heading>
    </>
  );
};

export default App;
