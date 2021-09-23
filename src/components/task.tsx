import styles from "./task.module.scss";

const Task: React.FC<{ title: string; body: string; clicked: () => void }> = (
  props
) => {
  return (
    <div className={styles.Task} onClick={props.clicked}>
      <h5>{props.title}</h5>
      <p>{props.body}</p>
    </div>
  );
};

export default Task;
