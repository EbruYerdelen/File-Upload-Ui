import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [
        (Story) => (
            <FormProvider {...useForm()}>
                <Story />
            </FormProvider>
        )],
    tags: ["autodocs"],
    argTypes: {
        variant: {
            name: "Variant",
            control: 'inline-radio',
            table: { category: 'Appearance' }
        },
        size: {
            name: "Size",
            control: 'select',
            table: { category: "Sizes"}
        },
        orientation: {
            name: "Orientation",
            control: 'inline-radio',
            table: { category: 'Appearance' }
        },
        required: {
            name: "Required",
            table: { category: 'Input' }
        },
        checkboxHeaderLabel: {
            name: "Checkbox Header Label",
            table: { category: 'Input' }
        },
        name: {
            name: "Name",
            table: { category: 'Input' }
        },
        reverse: {
            name: "Reverse",
            table: { category: 'Appearance' }
        },
        checkboxList: { table: { category: 'Input' } },
        onChange: { table: { category: 'Actions' } },
        "data-testid": { table: { category: "Actions" } }
    }
}

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCheckboxArgs = [
    {
        id: 1,
        disabled: false,
        selected: true,
        visible: true,
        required: false,
        value: "Checkbox Value"
    }
]

const groupedCheckboxArgs = [
    {
        id: 1,
        disabled: false,
        selected: false,
        visible: true,
        required: false,
        value: "First Checkbox"
    },
    {
        id: 2,
        disabled: false,
        selected: false,
        visible: true,
        required: true,
        value: "Second Checkbox"
    }
]

export const Checked: Story = {
    name: 'State: Checked',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        variant: 'primary'
    }
};

export const Unchecked: Story = {
    name: 'State: Unchecked',
    args: {
        name: "checkbox",
        checkboxList: [{
            id: 1,
            selected: false,
            visible: true,
            value: "Checkbox Value"
        }]
    }
};


export const Primary: Story = {
    name: 'Variant: Primary',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        variant: 'primary'
    }
};

export const Secondary: Story = {
    name: 'Variant: Secondary',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        required: true,
        variant: 'secondary'
    }
};

export const SizeXsmall: Story = {
    name: 'Size: Xsmall',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        size:'xsmall'
    }
};

export const SizeSmall: Story = {
    name: 'Size: Small',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        size:'small'
    }
};

export const SizeBase: Story = {
    name: 'Size: Base',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        size:'base'
    }
};

export const SizeNormal: Story = {
    name: 'Size: Normal',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        size:'normal'
    }
};

export const SizeLarge: Story = {
    name: 'Size: Large',
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        size:'large'
    }
};

export const CheckboxHeaderLabel: Story = {
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        checkboxHeaderLabel: 'Checkbox Header Label'
    }
};

export const ReverseFalse: Story = {
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        reverse: false
    }
};

export const ReverseTrue: Story = {
    args: {
        name: "checkbox",
        checkboxList: defaultCheckboxArgs,
        reverse: true
    }
};

export const DisabledAndNotSelectedCheckbox: Story = {
    name: 'Disabled and not selected',
    args: {
        name: "checkbox",
        checkboxList: [{
            id: 1,
            selected: false,
            visible: true,
            disabled: true,
            value: "Checkbox Value"
        }],
        reverse: true
    }
};

export const DisabledAndSelectedCheckbox: Story = {
    name: 'Disabled and selected',
    args: {
        name: "checkbox",
        checkboxList: [{
            id: 1,
            selected: true,
            visible: true,
            disabled: true,
            value: "Checkbox Value"
        }],
        reverse: true
    }
};

export const GroupedCheckbox: Story = {
    args: {
        name: "checkbox",
        checkboxList: groupedCheckboxArgs,
        checkboxHeaderLabel: 'Grouped Checkbox List'
    }
};

export const OrientationVertical: Story = {
    name: 'Orientation: Vertical',
    args: {
        name: "checkbox",
        checkboxList: groupedCheckboxArgs,
        checkboxHeaderLabel: 'Grouped Checkbox List',
        orientation: 'vertical'
    }
};
export const OrientationHorizontal: Story = {
    name: 'Orientation: Horizontal',
    args: {
        name: "checkbox",
        checkboxList: groupedCheckboxArgs,
        checkboxHeaderLabel: 'Grouped Checkbox List',
        orientation: 'horizontal'
    }
};

export const Required: Story = {
    args: {
        name: "checkbox",
        checkboxList: [{
            id: 1,
            selected: true,
            visible: true,
            disabled: true,
            required: true,
            value: "Checkbox Value"
        }],
        required: true,
        checkboxHeaderLabel: 'Checkbox Header'
    },
};

export const SomeRequired: Story = {
    args: {
        name: "checkbox",
        checkboxList: groupedCheckboxArgs,
        required: true,
        checkboxHeaderLabel: 'Grouped Checkbox List'
    },
};

export const Indeterminate: Story = {
    args: {
        name: "checkbox",
        checkboxList: [{
            id: 1,
            selected: false,
            visible: true,
            indeterminate: true,
            value: "Indeterminate Checkbox"
        }]
    },
};

export const SomeIndeterminate: Story = {
    args: {
        name: "checkbox",
        checkboxList: [
            {
                id: 1,
                disabled: false,
                selected: false,
                visible: true,
                indeterminate: true,
                value: "Normal Checkbox"
            },
            {
                id: 2,
                disabled: false,
                selected: false,
                visible: true,
                value: "Indeterminate Checkbox"
            }
        ]
    },
};


