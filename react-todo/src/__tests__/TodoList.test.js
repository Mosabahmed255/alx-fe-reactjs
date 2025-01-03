import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems.length).toBe(3); // Assuming 3 initial todos
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    const newTodo = screen.getByText("New Todo");
    expect(newTodo).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Initial Todo 1"); // Replace with one of the initial todos
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass("completed"); // Assuming completed class is added
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0]; // Assuming delete buttons are present
    fireEvent.click(deleteButton);

    const todoItem = screen.queryByText("Initial Todo 1"); // Replace with one of the initial todos
    expect(todoItem).not.toBeInTheDocument();
  });
});
