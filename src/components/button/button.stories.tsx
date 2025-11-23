import type { ArgTypes, Meta, StoryObj } from '@storybook/react-vite';
import { Button, type ButtonProps } from './button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const defaultArgs: ButtonProps = {
	children: 'Click Me',
	borderRadius: 'md',
	color: 'primary',
	onClick: () => {},
	size: 'md',
	variant: 'contained',
};

const argTypes: Partial<ArgTypes<ButtonProps>> = {
	borderRadius: {
		control: { type: 'select' },
		options: ['sm', 'md', 'lg', 'rounded'],
	},
	color: {
		control: { type: 'select' },
		options: ['primary', 'secondary', 'success', 'warning'],
	},
	size: {
		control: 'select',
		options: ['xs', 'sm', 'md', 'lg'],
	},
};

export const Contained: Story = {
	args: {
		...defaultArgs,
	},
	argTypes,
};

export const Outlined: Story = {
	args: {
		...defaultArgs,
		variant: 'outlined',
	},
	argTypes,
};

export const Text: Story = {
	args: {
		...defaultArgs,
		variant: 'text',
	},
	argTypes,
};
