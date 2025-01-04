import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust the path based on your project structure.

describe('TodoList Component', () => {
  it('renders the initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Initial Todo')).toBeInTheDocument();
  });

  // Add more tests here...
});
