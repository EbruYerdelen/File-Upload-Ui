import type { Meta, StoryObj } from "@storybook/react";
import BrowseButton from "../BrowseButton";

const meta: Meta<typeof BrowseButton> = {
  component: BrowseButton,
  title: "BrowseButton",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonName: { control: "text" },
  },

  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};

export const Browse: Story = {
  args: {
    buttonName: "Browse",
  },
};


export const Browsed: Story = {
  args: {
    buttonName: "Browsed",
  },
};


