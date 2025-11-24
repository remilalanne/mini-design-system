import type { ArgTypes, Meta, StoryObj } from '@storybook/react-vite';
import { Colors } from '../../types/colors';
import { ProgressBar, ProgressCircle, type ProgressProps } from './progressBar';

const barMeta: Meta<typeof ProgressBar> = {
	title: 'Feedback & Status/ProgressBar',
	component: ProgressBar,
	tags: ['autodocs'],
};

const argTypes: Partial<ArgTypes<ProgressProps>> = {
	color: {
		control: { type: 'select' },
		options: [
			Colors.Primary,
			Colors.Secondary,
			Colors.Success,
			Colors.Warning,
		],
	},
};

export default barMeta;

export const Bar: StoryObj<typeof ProgressBar> = {
	args: {
		value: 60,
		showValue: true,
		label: 'Uploading',
		color: Colors.Primary,
	},
	argTypes,
};

export const Circle: StoryObj<typeof ProgressCircle> = {
	args: {
		value: 45,
		color: Colors.Primary,
	},
	render: (args) => <ProgressCircle {...args} />,
	argTypes,
};

export const CustomColor: StoryObj<typeof ProgressBar> = {
	args: {
		value: 60,
		showValue: true,
		label: 'Uploading',
		color: '#ff002e',
	},
};
