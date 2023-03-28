# clevai-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/clevai-ui.svg)](https://www.npmjs.com/package/clevai-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save clevai-ui
```

## Usage

```tsx
import React, { Component } from 'react';

import MyComponent from 'clevai-ui';
import 'clevai-ui/dist/index.css';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

```tsx
import React from 'react';

import { Avartar } from 'clevai-ui';
import 'clevai-ui/dist/index.css';

const App = () => {
  return <Avatar size={18} src={''} shape={'circle'} />;
};
```

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

## License

MIT © [](https://github.com/)
