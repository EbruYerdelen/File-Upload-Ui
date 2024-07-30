import type { Meta, StoryObj } from "@storybook/react";
import App from "../App";

const meta: Meta<typeof App> = {
  component: App,
  title: "App",
  argTypes: {
    initialFileName: { control: "text", name: "File Name" },
    initialButtonName: { control: "text", name: "Button Name" },
  },
  tags: ["autodocs"],
};

  
export default meta;

type Story = StoryObj<typeof meta>;


export const Base: Story = {
  args: {
    initialFileName: "",
    initialButtonName: "Browse",
  },
};

export const WithFileName: Story = {
  args: {
    initialFileName: "example.txt",
    initialButtonName: "Browsed",
  },
};

