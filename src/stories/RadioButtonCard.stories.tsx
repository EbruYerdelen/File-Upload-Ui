import type { Meta, StoryObj } from "@storybook/react";
import RadioButtonCard from "../RadioButtonCard";


const meta: Meta<typeof RadioButtonCard> = {
  component: RadioButtonCard,
  title: "Radio Button Card",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    checked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title : "Video Record ",
    description : "Record video during session",
    checked: false,
  },
};
