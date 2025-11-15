import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';

const meta: Meta<typeof Container> = {
	title: 'Layout/Container',
	component: Container,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
	args: {
		children: <div style={{ border: '1px solid lightgray' }}>content</div>,
	},
};
