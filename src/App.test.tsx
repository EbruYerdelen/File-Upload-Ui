import "@testing-library/jest-dom";
import { render, screen} from "@testing-library/react";
import App from "./App";

describe(App, () => {

  it("Check if initial button name updates,browse button name also updates.", () => {
    render(<App initialButtonName="Initial Name" />);

    // Check if the Browse button is rendered with the initial button name
    const initialButton = screen.getByText("Initial Name");
    expect(initialButton).toBeInTheDocument();
  })



  it("Displays and renders the button containing XCircle icon when initial file name is provided", () => {
    render(<App initialFileName="example.txt" />);

    // We are checking if the Browse button is rendered
    const removeFileButton = screen.getByTestId("removeFile");
    expect(removeFileButton).toBeInTheDocument();


  })
    
});
