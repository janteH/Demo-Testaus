import App from "./App";
import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("renders header", () => {
    render(<App />);
    const header = screen.getByText(/My Todolist/i);
    expect(header).toBeInTheDocument();
});