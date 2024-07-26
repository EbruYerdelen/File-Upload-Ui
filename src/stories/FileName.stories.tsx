import type { Meta, StoryObj } from "@storybook/react";
import FileName from "../FileName";

const meta: Meta<typeof FileName> = {
  component: FileName,
  title: "FileName",
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    fileName: "filename",
  },
};
