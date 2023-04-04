import React from 'react';
import { Icon } from '../icon';
import { Heading } from '../typography';
import styles from './search.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  size: 56 | 48 | 40 | 32;
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const Search = ({
  size,
  value,
  onChangeValue,
  placeholder,
  disabled,
  errorMessage,
  ...props
}: Props) => {
  const handleClearSearchValue = () => {
    onChangeValue('');
  };
  return (
    <div className={styles.searchWrap}>
      <div
        className={`${styles.search} ${styles[`search-${size}`]} ${
          disabled ? styles.disabled : ''
        } ${errorMessage ? styles.error : ''}`}
      >
        <Icon
          type='search'
          size='md'
          fill={value ? 'gray85Color' : 'gray30Color'}
        />
        <input
          {...props}
          className={
            size === 56 || size === 48
              ? styles.bigFontSize
              : styles.smallFontSize
          }
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        />
        <div
          className={`${styles.closeIcon} ${value ? styles.showCloseIcon : ''}`}
          onClick={handleClearSearchValue}
        >
          <Icon type='close' size='sm' fill='gray30Color' />
        </div>
      </div>
      {errorMessage && (
        <Heading type='note' font='regular' color='errorColor'>
          {errorMessage}
        </Heading>
      )}
    </div>
  );
};

Search.defaultProps = {
  placeholder: 'Search...',
  disabled: false,
  error: false
};

export default Search;
