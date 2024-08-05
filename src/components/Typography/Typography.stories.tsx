import React from 'react';
import { Typography } from './Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
    title: 'Components/Typogprahy',
    component: Typography,
    tags: ["autodocs"],
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
            defaultValue: 'Typography',
        },
        variant: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6','p'],
            },
            defaultValue: 'h1',
        },
        color: {
            color: { table: { category: 'Appearance'}},
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        text: 'Typography - H1',
        variant: 'h1',
    },
};
export const H2: Story = {
    args: {
        text: 'Typography - H2',
        variant: 'h2',
    },
};

export const H3: Story = {
    args: {
        text: 'Typography - H3',
        variant: 'h3',
    },
};

export const H4: Story = {
    args: {
        text: 'Typography - H4',
        variant: 'h4',
    },
};

export const H5: Story = {
    args: {
        text: 'Typography - H5',
        variant: 'h5',
    },
};

export const H6: Story = {
    args: {
        text: 'Typography - H6',
        variant: 'h6',
    },
};

export const H6_uppercase: Story = {
    args: {
        text: 'Typography - H6',
        variant: 'h6',
        isUppercase: true,
    },
};

export const P: Story = {
    args: {
        text: 'Typography - P',
        variant: 'p',
    },
};

export const P_small: Story = {
    args: {
        text: 'Typography - P',
        variant: 'p',
        isSmall: true,
    },
};
