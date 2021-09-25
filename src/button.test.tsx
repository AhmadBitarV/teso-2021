import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Button from './components/button/button';

test('Expect the button to be called once upon a click', () => {
  const text = 'Hit the button';
  const onClick = jest.fn();
  render(<Button text={text} clicked={onClick} />);
  const btnElement = screen.getByText(text);
  fireEvent.click(btnElement);
  expect(onClick).toBeCalledTimes(1);
});
