import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  type: string;
  autoFocus?: boolean;
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  label: string;
  checked: boolean | null;
  reference?: any;
}

const input: React.FC<InputProps> = (props) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor="">
        {props.label}
      </label>
      <input
        autoFocus={props.autoFocus}
        onChange={props.changed}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        ref={props.reference}
      />
    </div>
  );
};

export default input;
