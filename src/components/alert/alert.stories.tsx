import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '../typography/typography';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
	title: 'Feedback & Status/Alert',
	component: Alert,
	tags: ['autodocs'],
};

export default meta;

export const Info: StoryObj<typeof Alert> = {
	render: (args) => (
		<Alert
			{...args}
			title={<Typography weight="bold">Heads up!</Typography>}
		>
			<Typography>This is an informational message.</Typography>
		</Alert>
	),
	args: {
		variant: 'info',
		dismissible: false,
	},
};

export const Success: StoryObj<typeof Alert> = {
	render: () => (
		<Alert
			variant="success"
			title={<Typography weight="bold">Success</Typography>}
		>
			<Typography>Action completed successfully.</Typography>
		</Alert>
	),
};
