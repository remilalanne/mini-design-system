import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
	title: 'Components/Typography',
	component: Typography,
	tags: ['autodocs'],
	args: {
		children: 'Almost before we knew it, we had left the ground.',
		variant: 'body',
		align: 'left',
		weight: 'normal',
		fontSize: 'md',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'caption'],
		},
		align: {
			control: 'radio',
			options: ['left', 'center', 'right', 'justify'],
		},
		weight: {
			control: 'radio',
			options: ['normal', 'semibold', 'bold'],
		},
		component: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
		},
		fontSize: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Playground: Story = {};

export const Headings: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '12px',
				alignItems: 'flex-start',
			}}
		>
			<Typography variant="h1">Heading 1</Typography>
			<Typography variant="h2">Heading 2</Typography>
			<Typography variant="h3">Heading 3</Typography>
			<Typography variant="h4">Heading 4</Typography>
			<Typography variant="h5">Heading 5</Typography>
			<Typography variant="h6">Heading 6</Typography>
		</div>
	),
};

export const Caption: Story = {
	args: {
		variant: 'caption',
		children: 'Supporting caption text',
		color: 'var(--color-text-muted)',
	},
};
