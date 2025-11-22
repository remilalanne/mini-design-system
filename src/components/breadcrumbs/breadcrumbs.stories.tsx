import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'Navigation & Disclosure/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs'],
};

export default meta;

export const Playground: StoryObj<typeof Breadcrumbs> = {
	args: {
		items: [
			{ label: 'Home', href: '#' },
			{ label: 'Projects', href: '#' },
			{ label: 'New project' },
		],
	},
};
