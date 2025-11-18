import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	tags: ['autodocs'],
	args: {
		items: [
			{
				label: 'Overview',
				value: 'overview',
				content: 'Overview content',
			},
			{ label: 'Details', value: 'details', content: 'Details content' },
			{
				label: 'Disabled',
				value: 'disabled',
				content: 'Disabled content',
				disabled: true,
			},
		],
		defaultValue: 'overview',
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const Controlled: Story = {
	args: {
		items: [
			{
				label: 'Tab A',
				value: 'a',
				content: 'Controlled Tab A content',
			},
			{
				label: 'Tab B',
				value: 'b',
				content: 'Controlled Tab B content',
			},
		],
		activeValue: 'b',
	},
};
