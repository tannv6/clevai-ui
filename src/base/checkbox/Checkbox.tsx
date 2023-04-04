import React, { useRef, useEffect } from 'react';
import { Icon } from '../icon';
import { Heading } from '../typography';
import styles from './checkbox.scss';
import { genSizeClass } from '..';

type ValueType = string | number;

type TSize =
  | 16
  | 20
  | 24
  | {
      xl: 16 | 20 | 24;
      md: 16 | 20 | 24;
      sm: 16 | 20 | 24;
    };

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'normal' | 'multi';
  value: ValueType;
  checkedCheckboxArr: ValueType[];
  onCheckboxChange: (value: ValueType) => void;
  outerSize: TSize;
  label?: string;
  disabled?: boolean;
}

const Checkbox = ({
  type,
  value,
  checkedCheckboxArr,
  outerSize,
  onCheckboxChange,
  label,
  disabled,
  ...props
}: Props) => {
  const checkboxLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (disabled) {
      const parentRef = checkboxLabelRef.current?.parentElement;
      checkboxLabelRef.current?.classList.add(styles.disabled);
      parentRef?.classList.add(styles.disabled);
    }
  }, []);

  useEffect(() => {
    if (checkedCheckboxArr.includes(value)) {
      checkboxLabelRef.current?.classList.add(styles.checked);
    } else {
      checkboxLabelRef.current?.classList.remove(styles.checked);
    }
  }, [checkedCheckboxArr]);

  return (
    <div className={styles.checkboxWrap}>
      <div
        className={`${styles['checkbox-content']} ${genSizeClass(
          outerSize,
          'checkbox',
          styles
        )}`}
      >
        <label ref={checkboxLabelRef} className={styles.checkbox}>
          <input
            {...props}
            type='checkbox'
            onChange={() => onCheckboxChange(value)}
            checked={checkedCheckboxArr.includes(value)}
          />
          <span className={styles.checkmark}>
            {type === 'normal' && <Icon type='tick' size='sm' fill='white' />}
            {type === 'multi' && (
              <Icon type='multiCheckbox' size='sm' fill='white' />
            )}
          </span>
        </label>
      </div>
      {label && (
        <div className={styles.textWrap}>
          <Heading type={'caption'} font='medium' color='grayColor'>
            {label}
          </Heading>
        </div>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  type: 'normal',
  label: '',
  disabled: false
};

export default Checkbox;
