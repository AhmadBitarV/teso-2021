import styles from './task.module.scss';

interface TaskProps {
  completed: boolean;
  title: string;
  body: string;
  statusUpdated: () => void;
  deleted?: () => void;
}

const Task: React.FC<TaskProps> = (props) => {
  let inputStyle = `${styles.task__status} ${
    props.completed === true ? styles.task__status__green : ''
  }`;

  return (
    <div className={styles.task}>
      <h5>{props.title}</h5>
      <span onClick={props.deleted}>X</span>
      <p className={styles.task__content}>{props.body}</p>
      <p className={inputStyle} onClick={props.statusUpdated}>
        {props.completed === true ? 'Completed' : 'In progress'}
      </p>
    </div>
  );
};

export default Task;
