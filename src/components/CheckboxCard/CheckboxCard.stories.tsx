import type { Meta, StoryObj } from "@storybook/react";
import CheckboxCard from "./CheckboxCard";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Components/Checkbox/CheckboxCard",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    checked: { control: "boolean" },
    onChangeHandle: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <FormProvider {...useForm()}>
        <Story />
      </FormProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    checked: true,
  },
};
