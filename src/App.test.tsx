import App from "./App";
import { test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("renders header", () => {
    render(<App />);
    const header = screen.getByText(/My Todolist/i);
    expect(header).toBeInTheDocument();
});

test("adds and clears a todo", () => {
    render(<App />);

    const dateInput = screen.getByPlaceholderText("Date");
    const descInput = screen.getByPlaceholderText("Description");
    const addButton = screen.getByText("Add");
    const clearButton = screen.getByText("Clear");

    fireEvent.change(dateInput, { target: { value: "24.01.2025" } });
    fireEvent.change(descInput, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Task")).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
});