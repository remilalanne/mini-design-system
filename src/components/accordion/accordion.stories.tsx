import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '../typography/typography';
import { Accordion } from './accordion';

const meta: Meta<typeof Accordion> = {
	title: 'Navigation & Disclosure/Accordion',
	component: Accordion,
	tags: ['autodocs'],
};

export default meta;

const items = [
	{
		id: 'shipping',
		title: 'Shipping',
		content: <Typography>Orders ship within 2 business days.</Typography>,
	},
	{
		id: 'returns',
		title: 'Returns',
		content: <Typography>You can return items within 30 days.</Typography>,
	},
];

export const Playground: StoryObj<typeof Accordion> = {
	args: {
		items,
	},
};

export const MultipleOpen: StoryObj<typeof Accordion> = {
	args: {
		items,
		allowMultiple: true,
		defaultExpandedIds: ['shipping'],
	},
};
