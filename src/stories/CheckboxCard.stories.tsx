import type { Meta, StoryObj } from "@storybook/react";
import CheckboxCard from "../CheckboxCard";

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Checkbox Card",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    checkedbox: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    checkedbox: false, 
  },
};
