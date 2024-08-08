import type { Meta, StoryObj } from "@storybook/react";
import CheckboxCard from "./CheckboxCard";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Components/Checkbox/CheckboxCard",
  tags: ["autodocs"],
  parameters: {
    layout:'fullscreen',
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

//checked aşağıdaki şekilde değişim gösteriyor ancak kart içerisinde değişim göstermiyor.
const onChangeHandle = (checked: boolean) => {
  console.log("Checkbox changed:", checked);
};

export const Base: Story = {
  args: {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    checked:false,
    onChangeHandle
  },
};

export const Checked: Story = {
  args: {
    title: "Device & Usage Report",
    description: "Access device and usage reports",
    checked: true,
    onChangeHandle,
  },
};
