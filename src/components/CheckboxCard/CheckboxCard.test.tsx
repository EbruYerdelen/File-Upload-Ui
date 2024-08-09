import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxCard from "./CheckboxCard";

describe("CheckboxCard", () => {
  const defaultProps = {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    onChangeHandle: jest.fn(),
    checked: false,
    id: 1,
    disabled:false,
  };

  test("renders with default props", () => {
    render(<CheckboxCard {...defaultProps} />);

    expect(screen.getByText("Device & Usage Report")).toBeInTheDocument();
    expect(
      screen.getByText("Access device and usage reports")
    ).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("renders with custom props", () => {
    const customProps = {
      title: "Custom Title",
      description: "Custom Description",
      checked: true,
      onChangeHandle: jest.fn(),
      id: 1,
      disabled:true,
    };
    render(<CheckboxCard {...customProps} />);

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom Description")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("toggles checkbox when clicked", () => {
    render(<CheckboxCard {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("applies correct styles when checked", () => {
    render(<CheckboxCard {...defaultProps} checked={true} />);
    const card = screen.getByText("Device & Usage Report").closest("div");

    expect(card).toHaveClass("border-2");
    expect(card).toHaveClass("border-purple-600");
    expect(card).toHaveClass("scale-[1.03]");
  });

  test("applies correct styles when unchecked", () => {
    render(<CheckboxCard {...defaultProps} />);
    const card = screen.getByText("Device & Usage Report").closest("div");

    expect(card).toHaveClass("border-gray-200");
    expect(card).not.toHaveClass("border-2");
    expect(card).not.toHaveClass("border-purple-600");
    expect(card).not.toHaveClass("scale-[1.03]");
  });

  test("renders without description when not provided", () => {
    const propsWithoutDescription = { ...defaultProps, description: undefined };
    render(<CheckboxCard {...propsWithoutDescription} />);

    expect(
      screen.queryByText("Access device and usage reports")
    ).not.toBeInTheDocument();
  });

  test("updates checkbox state when checked prop changes", () => {
    const { rerender } = render(<CheckboxCard {...defaultProps} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();

    rerender(<CheckboxCard {...defaultProps} checked={true} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("calls onChangeHandle when checkbox is clicked", () => {
    const onChangeHandle = jest.fn();
    render(<CheckboxCard {...defaultProps} onChangeHandle={onChangeHandle} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(onChangeHandle).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(onChangeHandle).toHaveBeenCalledWith(false);
  });

  test("applies correct text color when checked", () => {
    render(<CheckboxCard {...defaultProps} checked={true} />);
    const title = screen.getByText("Device & Usage Report");
    const description = screen.getByText("Access device and usage reports");

    expect(title).toHaveClass("text-primary-800");
    expect(description).toHaveClass("text-primary-700");
  });

  test("applies correct text color when unchecked", () => {
    render(<CheckboxCard {...defaultProps} />);
    const title = screen.getByText("Device & Usage Report");
    const description = screen.getByText("Access device and usage reports");

    expect(title).toHaveClass("text-gray-700");
    expect(description).toHaveClass("text-gray-600");
  });

  test("renders checkbox with correct size and variant", () => {
    render(<CheckboxCard {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveClass("size-base");
    expect(checkbox).toHaveClass("variant-primary");
  });

  test("checkbox is associated with a label", () => {
    render(<CheckboxCard {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAccessibleName("Device & Usage Report");
  });
});
