import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './stack';

const meta: Meta<typeof Stack> = {
	title: 'Layout/Stack',
	component: Stack,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const itemStyle = {
	border: '1px solid black',
	padding: 'var(--spacing-3)',
};

const children = (
	<>
		<div style={itemStyle}>item 1</div>
		<div style={itemStyle}>item 2</div>
		<div style={itemStyle}>item 3</div>
	</>
);

export const Default: Story = {
	args: {
		children,
	},
};
