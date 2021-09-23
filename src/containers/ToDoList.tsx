import { useEffect, useState } from "react";
import styles from "./ToDoList.module.scss";

import Button from "../components/button/button";
import Task from "../components/task";

interface ItemData {
  title: string;
  body: string;
  completed?: boolean;
}

const ToDoList = () => {
  const [toDoTasks, setToDoTasks] = useState<ItemData[] | []>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [completed, setCompleted] = useState("");
  const [error, setError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const validateInput = () => {
    if (title.length === 0 || body.length === 0) {
      setError("Please add a Title and Body");
    } else {
      setFormIsValid(true);
    }
  };

  const onTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onTodoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const onDeletehandler = () => {
    console.log("Deleted");
  };

  useEffect(() => {
    validateInput();
  }, [title, body]);

  function submit(e: any) {
    e.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      let task = {
        title,
        body,
      };

      setToDoTasks([...toDoTasks, task]);
      console.log(toDoTasks);
      setTitle("");
      setBody("");
      setFormIsValid(false);
    }
  }

  let tasks = [];
  tasks = toDoTasks.map((task: { title: string; body: string }) => {
    return (
      <Task
        key={Math.random() * 100}
        title={task.title}
        body={task.body}
        clicked={onDeletehandler}
      />
    );
  });

  return (
    <form className={styles.Tasks} onSubmit={() => console.log("Hello")}>
      <div className={styles.input}>
        <label className={styles.input__label} htmlFor="">
          Title
        </label>
        <input
          onChange={onTitleHandler}
          className={styles.input__input}
          placeholder="Do my teso Task"
          type="text"
        />
      </div>

      <div className={styles.input}>
        <label className={styles.input__label} htmlFor="">
          To Do details
        </label>
        <input
          onChange={onTodoHandler}
          className={styles.input__input}
          placeholder="Finish Teso task successfully by writing clean TypeScript and React Code"
          type="text"
        />
      </div>

      <p>{error}</p>

      <Button className={styles.input__button} clicked={submit}>
        Add
      </Button>
      <div className={styles.taskList}>{tasks}</div>
    </form>
  );
};

export default ToDoList;
