import React from 'react';

import { render, screen } from '@testing-library/react';
import Task from './components/task/task';

test('Renders a task properly with the main info on it', () => {
  const task = {
    title: 'To do something',
    body: 'How I want to do it',
    completed: false,
    update: () => {},
    delete: () => {},
  };

  render(
    <Task
      title={task.title}
      body={task.body}
      completed={task.completed}
      statusUpdated={task.update}
      deleted={task.delete}
    />
  );
  const taskElement = screen.getByRole('contentinfo');
  expect(taskElement).toHaveTextContent(task.title);
  expect(taskElement).toHaveTextContent(task.body);
});
