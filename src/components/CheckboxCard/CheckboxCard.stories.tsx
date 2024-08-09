import type { Meta, StoryObj } from "@storybook/react";
import CheckboxCard from "./CheckboxCard";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Components/CheckboxCard",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
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
    id: 1,
    disabled: false,
    onChangeHandle: (isChecked: boolean) => {
      console.log("Checkbox changed:", isChecked);
    },
  },
};

export const Checked: Story = {
  args: {
    ...Base.args,
    checked: true,
  },
};


