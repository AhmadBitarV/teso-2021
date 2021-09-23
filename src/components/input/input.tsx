import React from 'react';
import styles from './input.module.scss';

interface Input {
  type: string;
  autoFocus?: boolean;
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  label: string;
  checked: boolean | null;
}

const input: React.FC<Input> = (props) => {
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
      />
    </div>
  );
};

export default input;
