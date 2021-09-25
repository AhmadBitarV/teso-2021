import { useEffect, useRef, useState } from 'react';
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
  /// State
  const [tasks, setTasks] = useState<TaskData[] | []>([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');

  /// Refs
  const inputRef = useRef<HTMLInputElement>(null);

  // State Management
  const onTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onBodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const onStatusUpdateHandler = (id: number) => {
    let updatedTasks = [...tasks];
    let indexOfClickedTask = 0;
    updatedTasks.forEach((task, index) => {
      if (task.id === id) indexOfClickedTask = index;
    });
    tasks[indexOfClickedTask].status = !tasks[indexOfClickedTask].status;
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

  // Side affects - Reaching out to localStorage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(tasks);
  }, []);

  // Handing the "Submit" button click
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
    } else {
      setError('You should fill both fields first...');
      inputRef.current?.focus();
    }
  }

  let taskList = [];
  taskList = tasks.map((task: TaskData) => {
    return (
      <Task
        key={task.id}
        title={task.title}
        body={task.body}
        deleted={() => onDeleteHandler(task.id!)}
        completed={task.status}
        statusUpdated={() => onStatusUpdateHandler(task.id!)}
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
            placeholder={"Complete Today's Programming Test"}
            type="text"
            value={title}
            checked={null}
            reference={inputRef}
          />

          <Input
            label="Content"
            changed={onBodyHandler}
            placeholder={'Build a Todo app with React and TypeScript'}
            type="text"
            value={body}
            checked={null}
          />

          <Input
            label="Mark Completed"
            changed={onStatusHandler}
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
