import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, type CardProps } from './card';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

const defaultArgs: CardProps = {
	header: <strong>Card title</strong>,
	children: 'Card body',
	footer: <small>Footer</small>,
	padding: 'md',
	spacing: 'md',
	variant: 'elevated',
};

export const Playground: Story = {
	args: defaultArgs,
};

export const Outline: Story = {
	args: {
		...defaultArgs,
		variant: 'outlined',
		header: 'Outlined card',
	},
};

export const Subtle: Story = {
	args: {
		...defaultArgs,
		variant: 'subtle',
		footer: 'Actions go here',
	},
};
