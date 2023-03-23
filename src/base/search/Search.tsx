import React from 'react';
import { Icon } from '../icon';
import { Heading } from '../typography';
import styles from './search.scss';

interface Props {
  size: 56 | 48 | 40 | 32;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

const Search = ({
  size,
  value,
  setValue,
  placeholder,
  disabled,
  error,
  errorMessage
}: Props) => {
  const handleClearSearchValue = () => {
    setValue('');
  };
  return (
    <div className={styles.searchWrap}>
      <div
        className={`${styles.search} ${styles[`search-${size}`]} ${
          disabled ? styles.disabled : ''
        } ${error ? styles.error : ''}`}
      >
        <Icon
          type='search'
          size={'md'}
          fill={value ? 'gray85Color' : 'gray30Color'}
        />
        <input
          className={
            size === 56 || size === 48
              ? styles.bigFontSize
              : styles.smallFontSize
          }
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className={`${styles.closeIcon} ${value ? styles.showCloseIcon : ''}`}
          onClick={handleClearSearchValue}
        >
          <Icon type='close' size={'sm'} fill='gray30Color' />
        </div>
      </div>
      {error && errorMessage && (
        <Heading type='note' font='regular' color='errorColor'>
          {errorMessage}
        </Heading>
      )}
    </div>
  );
};

Search.defaultProps = {
  placeholder: 'Search...',
  size: 56,
  disabled: false,
  error: false
};

export default Search;
