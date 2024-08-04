import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import Radio, { Option } from './Radio';

const meta: Meta = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    name: { control: 'text' },
    option: { control: 'object' },
    control: { control: false },
    variant: {
      control: 'select',
      options: ['default', 'custom'],
    },
  },
};
export default meta;

const RadioWrapper = ({ name, option, variant }: { name: string; option: Option; variant: 'default' | 'custom' }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <Radio name={name} option={option} control={methods.control} variant={variant} />
      </form>
    </FormProvider>
  );
};

type Story = StoryObj<typeof RadioWrapper>;

export const Default: Story = {
  render: () => (
    <RadioWrapper
      name="example"
      option={{ name: 'option1', label: 'Option 1', value: 'option1' }}
      variant="default"
    />
  ),
};

export const Selected: Story = {
  render: () => {
    const methods = useForm({ defaultValues: { example: 'option2' } });
    return (
      <FormProvider {...methods}>
        <form>
          <Radio
            name="example"
            option={{ name: 'option2', label: 'Option 2', value: 'option2' }}
            control={methods.control}
            variant="default"
          />
        </form>
      </FormProvider>
    );
  },
};

export const MultipleOptions: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <Radio
            name="example"
            option={{ name: 'option1', label: 'Option 1', value: 'option1' }}
            control={methods.control}
            variant="default"
          />
          <Radio
            name="example"
            option={{ name: 'option2', label: 'Option 2', value: 'option2' }}
            control={methods.control}
            variant="default"
          />
          <Radio
            name="example"
            option={{ name: 'option3', label: 'Option 3', value: 'option3' }}
            control={methods.control}
            variant="default"
          />
        </form>
      </FormProvider>
    );
  },
};

export const CustomStyle: Story = {
  render: () => (
    <RadioWrapper
      name="example"
      option={{ name: 'option1', label: 'Option 1', value: 'option1' }}
      variant="custom"
    />
  ),
};

export const CustomMultipleOptions: Story = {
  render: () => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <Radio
            name="example"
            option={{ name: 'option1', label: 'Option 1', value: 'option1' }}
            control={methods.control}
            variant="custom"
          />
          <Radio
            name="example"
            option={{ name: 'option2', label: 'Option 2', value: 'option2' }}
            control={methods.control}
            variant="custom"
          />
          <Radio
            name="example"
            option={{ name: 'option3', label: 'Option 3', value: 'option3' }}
            control={methods.control}
            variant="custom"
            checked={true}
          />
        </form>
      </FormProvider>
    );
  },
};
