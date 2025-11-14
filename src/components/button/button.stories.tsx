import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const Contained: Story = {
	args: {
		...defaultArgs,
	},
};

export const Outlined: Story = {
	args: {
		...defaultArgs,
		variant: 'outlined',
	},
};

export const Text: Story = {
	args: {
		...defaultArgs,
		variant: 'text',
	},
};
