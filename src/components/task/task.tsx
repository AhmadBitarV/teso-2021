import styles from './task.module.scss';

const Task: React.FC<{
  completed: boolean;
  title: string;
  body: string;
  clicked: () => void;
}> = (props) => {
  return (
    <div className={styles.task} onClick={props.clicked}>
      <h5>{props.title}</h5>
      <p className={styles.task__content}>{props.body}</p>
      <p
        className={`${styles.task__status} ${
          props.completed === true ? styles.task__status__green : ''
        }`}
      >
        {props.completed === true ? 'Completed' : 'In progress'}
      </p>
    </div>
  );
};

export default Task;
