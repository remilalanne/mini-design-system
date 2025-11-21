import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
	title: 'Inputs & Controls/Switch',
	component: Switch,
	tags: ['autodocs'],
};

export default meta;

export const Playground: StoryObj<typeof Switch> = {
	args: {
		label: 'Enable notifications',
		description: 'Sends push alerts for activity',
	},
};
