import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
	title: 'Navigation & Disclosure/Pagination',
	component: Pagination,
	tags: ['autodocs'],
};

export default meta;

export const Playground: StoryObj<typeof Pagination> = {
	args: {
		totalPages: 5,
		defaultPage: 2,
	},
};
