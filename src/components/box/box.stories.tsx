import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './box';

const meta: Meta<typeof Box> = {
	title: 'Layout/Box',
	component: Box,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		children: 'Some content',
		borderColor: 'var(--color-border)',
		radius: 'md',
	},
	argTypes: {
		radius: {
			control: { type: 'radio' },
			options: ['sm', 'md', 'lg', 'none'],
		},
	},
};
