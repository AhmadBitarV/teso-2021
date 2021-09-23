import styles from "./button.module.scss";

const Button: React.FC<{ clicked?: any; className?: string }> = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={`${styles.button} ${styles.button__pink}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
