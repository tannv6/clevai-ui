import React, { useRef, useEffect } from 'react';
import styles from './radio.scss';
import { Heading } from '../typography';

interface Props {
  value: any;
  checked: any;
  setChecked: (value: any) => void;
  size: 16 | 24;
  label?: string;
  disabled?: boolean;
}

const Radio = ({
  value,
  checked,
  setChecked,
  size,
  label,
  disabled,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const radioDivRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (disabled) {
      radioDivRef.current?.classList.add(styles.disabled);
    }
  }, []);

  useEffect(() => {
    if (checked === value) {
      radioDivRef.current?.classList.add(styles.checked);
    } else {
      radioDivRef.current?.classList.remove(styles.checked);
    }
  }, [checked]);

  return (
    <div className={styles.radioWrap}>
      <div {...props} className={styles[`radio-${size}`]}>
        <label ref={radioDivRef} className={styles.radio}>
          <input
            ref={inputRef}
            type='radio'
            onChange={() => setChecked(value)}
            checked={checked === value}
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
  size: 20,
  label: '',
  disabled: false
};

export default Radio;
