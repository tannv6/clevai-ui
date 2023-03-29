# clevai-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/clevai-ui.svg)](https://www.npmjs.com/package/clevai-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clevai-ui
```

## Usage

### _Avatar Component_

```tsx
import React from 'react';

import { Avatar } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return <Avatar size={18} src={''} shape={'circle'} />;
};
```

### _Empty Component_

```tsx
import React from 'react';

import { Empty } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return (
    <Empty
      title={'404 Not Found'}
      message={'This page is not exist'}
      btnText={'Back to home'}
      bgColor={'#fff'}
      src={''}
    />
  );
};
```

### _Pagination Component_

```tsx
import React, { useState } from 'react';

import { Pagination } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <Pagination
      total={20}
      limit={2}
      current={page}
      onChangePage={setPage}
      pageType={'circle'}
    />
  );
};
```

### _Search Component_

```tsx
import React, { useState } from 'react';

import { Search } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  return (
    <Search
      size={56}
      value={value}
      onChangeValue={setValue}
      placeholder='Search...'
      errorMessage={errorMessage}
      disabled={false}
    />
  );
};
```

### _Input Component_

```tsx
import React, { useState } from 'react';

import { Input } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Input
      size='xs'
      icon
      placeholder='Label'
      onChange={onChange}
      value={value}
    />
  );
};
```

### _Checkbox Component_

```tsx
import React, { useState } from 'react';

import { Checkbox } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const checkboxValues = [
  {
    value: 1,
    label: 'Label 1'
  },
  {
    value: 2,
    label: 'Label 2'
  },
  {
    value: 3,
    label: 'Label 3'
  }
];

const App = () => {
  const [checkedCheckboxArr, setCheckedCheckboxArr] = useState<
    (string | number)[]
  >([]);

  const onCheckboxChange = (value: string | number) => {
    setCheckedCheckboxArr((prev) => {
      if (checkedCheckboxArr.includes(value)) {
        return prev.filter((valueChecked) => valueChecked !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div>
      {checkboxValues.map((checkbox) => (
        <Checkbox
          key={checkbox.value}
          value={checkbox.value}
          type={'normal'}
          checkedCheckboxArr={checkedCheckboxArr}
          onCheckboxChange={onCheckboxChange}
          size={24}
          label={checkbox.label}
          disabled={false}
        />
      ))}
    </div>
  );
};
```

### _Radio Component_

```tsx
import React from 'react';

import { Radio } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const radioValues = [
  {
    value: 1,
    label: 'Label 1'
  },
  {
    value: 2,
    label: 'Label 2'
  },
  {
    value: 3,
    label: 'Label 3'
  }
];

const App = () => {
  const [checkedRadio, setCheckedRadio] = useState<string | number>('');
  return (
    <div>
      {radioValues.map((radio) => (
        <Radio
          value={radio.value}
          checkedRadio={checkedRadio}
          onRadioChange={setCheckedRadio}
          label={radio.label}
          size={24}
          disabled={false}
        />
      ))}
    </div>
  );
};
```

### _Dropdown Component_

```tsx
import React, { useState } from 'react';

import 'clevai-ui/dist/index.css';
import { Wrapper, Dropdown, Rows, Col } from 'clevai-ui';
const OPTIONS = [
  { id: 0, label: 'Select 1' },
  { id: 1, label: 'Select 2' },
  { id: 2, label: 'Select 3' },
  { id: 3, label: 'Select 4' },
  { id: 4, label: 'Select 5' },
  { id: 5, label: 'Select 6' },
  { id: 6, label: 'Select 7' },
  { id: 7, label: 'Select 8' },
  { id: 8, label: 'Select 9' },
  { id: 9, label: 'Select 10' }
];
const App = () => {
  const initValue = {};
  // this value must have right type
  // when single select this value must be an object
  // when multi select this value must be an array like []
  const [values, setValue] = useState(initValue);
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleSearch = (e) => {
    //** do something */
  };
  return (
    <>
      <Wrapper pd={4} bg='white'>
        <Rows gutters={[8, 8]}>
          <Col span={4}>
            <Dropdown
              label={'Label'}
              value={values}
              options={OPTIONS}
              onSearch={handleSearch}
              onChange={handleChange}
              // disabled //boolean
              // error='' // string
              // inline   // boolean
              // multi    // boolean
              // placeholder='' // string
              // required // boolean
            />
          </Col>
        </Rows>
      </Wrapper>
    </>
  );
};

export default App;
```

### _Tag Component_

```tsx
import 'clevai-ui/dist/index.css';
import { Tag } from 'clevai-ui';
const App = () => {
  return (
    <>
      <Tag color={'blue6'} dot size={{ xl: 48, md: 32, sm: 24 }} type='filled'>
        Dilive
      </Tag>
      <Tag color={'blue6'} dot size={24} type='filled'>
        Dilive
      </Tag>
    </>
  );
};

export default App;
```

### _Tabs Component_

```tsx
import React, { useState } from 'react';

import 'clevai-ui/dist/index.css';
import { Tab, Tabs } from 'clevai-ui';
const App = () => {
  const [value, setValue] = useState(null);
  const handleChange = (e: any, value: any) => {
    setValue(value);
  };
  return (
    <>
      <Tabs onChange={handleChange} gutters={6} value={value}>
        <Tab size='md' icon='book'>
          Tab1
        </Tab>
        <Tab size='md' icon='book'>
          Tab2
        </Tab>
        <Tab size='md' icon='book'>
          Tab3
        </Tab>
      </Tabs>
    </>
  );
};

export default App;
```

### _ProgressBar Component_

```tsx
import React from 'react';

import 'clevai-ui/dist/index.css';
import { ProgressBar, ProgressCircle, ProgressDotedBar } from 'clevai-ui';
const App = () => {
  return (
    <>
      <ProgressBar
        bg='otherRed'
        data={{
          val: 30
        }}
      />
      <ProgressCircle
        data={{
          val: 30,
          w: 'md',
          rotate: 225,
          isReverse: false,
          text: 'Text',
          img: 'https://r73troypb4obj.vcdn.cloud/picture/L4%20icon/2.svg',
          bg: 'blue6',
          icon: 'star'
        }}
      />
      <ProgressDotedBar
        data={{
          max: 10,
          val: 2
        }}
      />
    </>
  );
};

export default App;
```

### _Row & Col Component_

```tsx
import React, { useState } from 'react';

import 'clevai-ui/dist/index.css';
import { Wrapper, Dropdown, Rows, Col, Heading } from 'clevai-ui';

const COLS = [
  {
    col: 4 as const
  },
  {
    col: 4 as const
  },
  {
    col: 4 as const
  },
  {
    col: 8 as const
  }
];
const App = () => {
  return (
    <>
      <Wrapper pd={4} bg='white'>
        <Rows gutters={[8, 8]}>
          {COLS.map((e, i) => {
            return (
              <Col span={e.col} key={i}>
                <Wrapper bg='blue6' br={4} pd={4}>
                  <Heading type={'body'}>Col-{e.col}</Heading>
                </Wrapper>
              </Col>
            );
          })}
        </Rows>
      </Wrapper>
    </>
  );
};

export default App;
```

## License

MIT © [](https://github.com/)
