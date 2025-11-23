import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, type DividerProps } from './divider';

const meta: Meta<typeof Divider> = {
	title: 'Layout/Divider',
	component: Divider,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

const defaultArgs: DividerProps = {
	label: 'Divider',
	orientation: 'horizontal',
	align: 'center',
	variant: 'solid',
};

export const Horizontal: Story = {
	args: defaultArgs,
};

export const Vertical: Story = {
	args: {
		...defaultArgs,
		orientation: 'vertical',
		label: undefined,
		length: '80px',
	},
};

export const Dashed: Story = {
	args: {
		...defaultArgs,
		variant: 'dashed',
		label: 'With label',
	},
};
