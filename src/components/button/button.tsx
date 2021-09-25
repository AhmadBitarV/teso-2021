import styles from './button.module.scss';

const Button: React.FC<{ clicked?: any; className?: string; text: string }> = (
  props
) => {
  return (
    <button
      onClick={props.clicked}
      className={`${styles.button} ${styles.button__pink}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
