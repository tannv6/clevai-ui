import React, { useRef, useEffect } from 'react';
import styles from './radio.scss';
import { Heading } from '../typography';

type ValueType = string | number;

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: ValueType;
  checkedRadio: ValueType;
  onRadioChange: (value: ValueType) => void;
  size: 16 | 20 | 24;
  label?: string;
  disabled?: boolean;
}

const Radio = ({
  value,
  checkedRadio,
  onRadioChange,
  size,
  label,
  disabled,
  ...props
}: Props) => {
  const radioLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (disabled) {
      const parentRef = radioLabelRef.current?.parentElement;
      radioLabelRef.current?.classList.add(styles.disabled);
      parentRef?.classList.add(styles.disabled);
    }
  }, []);

  useEffect(() => {
    if (checkedRadio === value) {
      radioLabelRef.current?.classList.add(styles.checked);
    } else {
      radioLabelRef.current?.classList.remove(styles.checked);
    }
  }, [checkedRadio]);

  return (
    <div className={styles.radioWrap}>
      <div className={styles[`radio-${size}`]}>
        <label ref={radioLabelRef} className={styles.radio}>
          <input
            {...props}
            type='radio'
            onChange={() => onRadioChange(value)}
            checked={checkedRadio === value}
          />
          <span className={styles.checkmark}></span>
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

Radio.defaultProps = {
  label: '',
  disabled: false
};

export default Radio;
