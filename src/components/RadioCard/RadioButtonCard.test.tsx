import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButtonCard from "./RadioButtonCard";

describe("RadioButtonCard", () => {
  const defaultProps = {
    title: "Video Record",
    description: "Record video during session",
    checked: false,
  };

  test("renders with default props", () => {
    render(<RadioButtonCard {...defaultProps} />);

    expect(screen.getByText("Video Record")).toBeInTheDocument();
    expect(screen.getByText("Record video during session")).toBeInTheDocument();
    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  test("renders with custom props", () => {
    const customProps = {
      title: "Custom Title",
      description: "Custom Description",
      checked: true,
    };
    render(<RadioButtonCard {...customProps} />);

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Description")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeChecked();
  });

  test("toggles radio button when clicked", () => {
    render(<RadioButtonCard {...defaultProps} />);
    const radio = screen.getByRole("radio");

    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  test("applies correct styles when checked", () => {
    render(<RadioButtonCard {...defaultProps} checked={true} />);
    const radioContainer = screen.getByRole("radio").closest("div");

    expect(radioContainer?.parentElement).toHaveClass("scale-110");
  });

  test("applies correct styles when unchecked", () => {
    render(<RadioButtonCard {...defaultProps} />);
    const radioContainer = screen.getByRole("radio").closest("div");

    expect(radioContainer?.parentElement).not.toHaveClass("scale-110");
  });

  test("renders without description when not provided", () => {
    const propsWithoutDescription = { ...defaultProps, description: undefined };
    render(<RadioButtonCard {...propsWithoutDescription} />);

    expect(
      screen.queryByText("Record video during session")
    ).not.toBeInTheDocument();
  });

  test("updates radio button state when checked prop changes", () => {
    const { rerender } = render(<RadioButtonCard {...defaultProps} />);
    expect(screen.getByRole("radio")).not.toBeChecked();

    rerender(<RadioButtonCard {...defaultProps} checked={true} />);
    expect(screen.getByRole("radio")).toBeChecked();
  });
});
