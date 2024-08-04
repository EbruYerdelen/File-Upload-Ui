import React from 'react';
import { Typography } from "./Typography";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Typography component", () => {
  it("renders h1 variant correctly", () => {
    render(<Typography data-testid="h1" variant="h1" text="h1 heading" />);
    const typography = screen.getByTestId("h1");
    expect(typography).toHaveClass("text-3xl font-semibold text-gray-800");
  })
  it("renders h2 variant correctly", () => {
    render(<Typography data-testid="h2" variant="h2" text="h2 heading" />);
    const typography = screen.getByTestId("h2");
    expect(typography).toHaveClass("text-2xl font-semibold text-gray-800");
  })
  it("renders h3 variant correctly", () => {
    render(<Typography data-testid="h3" variant="h3" text="h3 heading" />);
    const typography = screen.getByTestId("h3");
    expect(typography).toHaveClass("text-xl font-semibold text-gray-800");
  })
  it("renders h4 variant correctly", () => {
    render(<Typography data-testid="h4" variant="h4" text="h4 heading" />);
    const typography = screen.getByTestId("h4");
    expect(typography).toHaveClass("text-lg font-semibold text-gray-800");
  })
  it("renders h5 variant correctly", () => {
    render(<Typography data-testid="h5" variant="h5" text="h5 heading" />);
    const typography = screen.getByTestId("h5");
    expect(typography).toHaveClass("text-sm font-regular");
  })
  it("renders h6 variant correctly", () => {
    render(<Typography data-testid="h6" variant="h6" text="h6 heading" />);
    const typography = screen.getByTestId("h6");
    expect(typography).toHaveClass("text-gray-600");
  })
  it("renders h6 variant correctly with color", () => {
    render(<Typography data-testid="h6" variant="h6" text="h6 heading" color="text-red-600" />);
    const typography = screen.getByTestId("h6");
    expect(typography).toHaveClass("text-red-600");
  })
  it("renders h6 variant correctly with alignment", () => {
    render(<Typography data-testid="h6" variant="h6" text="h6 heading" alignment="text-center" />);
    const typography = screen.getByTestId("h6");
    expect(typography).toHaveClass("text-center");
  })
  it("renders h6 variant correctly with className", () => {
    render(<Typography data-testid="h6" variant="h6" text="h6 heading" className="text-center" />);
    const typography = screen.getByTestId("h6");
    expect(typography).toHaveClass("text-center");
  })
  it("renders p variant correctly", () => {
    render(<Typography data-testid="p" variant="p" text="p text" />);
    const typography = screen.getByTestId("p");
    expect(typography).toHaveClass("text-gray-600");
  })
  it("renders p variant correctly with color", () => {
    render(<Typography data-testid="p" variant="p" text="p text" color="text-red-600" />);
    const typography = screen.getByTestId("p");
    expect(typography).toHaveClass("text-red-600");
  })
  it("renders p variant correctly with alignment", () => {
    render(<Typography data-testid="p" variant="p" text="p text" alignment="text-center" />);
    const typography = screen.getByTestId("p");
    expect(typography).toHaveClass("text-center");
  })
});
