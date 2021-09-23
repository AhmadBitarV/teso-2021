import { useEffect, useState } from 'react';
import styles from './ToDo.module.scss';

import Input from '../components/input/input';
import Button from '../components/button/button';
import Task from '../components/task/task';

interface TaskData {
  title: string;
  body: string;
  status: boolean;
  id?: number;
}

const ToDo = () => {
  const [tasks, setTasks] = useState<TaskData[] | []>([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');

  const onTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onBodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const onDeleteHandler = (id: number) => {
    let updatedTasks = [...tasks];
    let indexOfClickedTask = 0;

    updatedTasks.forEach((task, index) => {
      if (task.id === id) indexOfClickedTask = index;
    });

    updatedTasks.splice(indexOfClickedTask, 1);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setTasks(updatedTasks);
  };

  const onStatusHandler = () => {
    setCompleted(!completed);
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(tasks);
  }, []);

  function submit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title.length !== 0 && body.length !== 0) {
      const task = {
        title,
        body,
        status: completed,
        id: Math.random() * 100000,
      };

      let updatedList = [...tasks, task];
      setTasks(updatedList);
      setTitle('');
      setBody('');
      localStorage.setItem('tasks', JSON.stringify(updatedList));
    } else setError('You should fill both field first...');
  }

  let taskList = [];
  taskList = tasks.map((task: TaskData) => {
    return (
      <Task
        key={task.id}
        title={task.title}
        body={task.body}
        clicked={() => onDeleteHandler(task.id!)}
        completed={task.status}
      />
    );
  });

  return (
    <div className={styles.toDo}>
      <main className={styles.content}>
        <h2>Write Your Todos</h2>
        <form className={styles.form} onSubmit={submit}>
          <Input
            label="Todo Title"
            autoFocus
            changed={onTitleHandler}
            placeholder={'I.E. To Complete Tesonet Technical Test'}
            type="text"
            value={title}
            checked={null}
          />

          <Input
            label="Content"
            changed={onBodyHandler}
            placeholder={
              'I.E. To successfully complete the task by successfully by writing clean TypeScript and React Code'
            }
            type="text"
            value={body}
            checked={null}
          />

          <Input
            label="Mark Completed"
            changed={onStatusHandler}
            placeholder={
              'I.E. To successfully complete the task by successfully by writing clean TypeScript and React Code'
            }
            type="checkbox"
            checked={completed}
          />

          <p className={styles.errorMessage}>{error}</p>

          <Button className={styles.button}>Add A ToDo</Button>
        </form>

        <div className={styles.taskList}>{taskList}</div>
      </main>
    </div>
  );
};

export default ToDo;
