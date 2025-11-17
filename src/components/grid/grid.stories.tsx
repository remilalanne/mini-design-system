import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../box/box';
import { Grid } from './grid';

const meta: Meta<typeof Grid> = {
	title: 'Layout/Grid',
	component: Grid,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const children = (
	<>
		<Box padding="md">Item 1</Box>
		<Box padding="md">Item 2</Box>
		<Box padding="md">Item 3</Box>
		<Box padding="md">Item 4</Box>
	</>
);

export const Default: Story = {
	args: {
		children,
	},
};

export const ThreeColumns: Story = {
	args: {
		children,
		columns: 3,
		gap: 'var(--spacing-3)',
	},
};
