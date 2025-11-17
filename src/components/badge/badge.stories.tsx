import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, type BadgeProps } from './badge';

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs'],
	args: {
		children: 'Badge',
		color: 'primary',
		variant: 'solid',
		size: 'md',
	},
	argTypes: {
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'warning'],
		},
		variant: {
			control: 'radio',
			options: ['solid', 'subtle', 'outlined'],
		},
		size: {
			control: 'radio',
			options: ['sm', 'md'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

const baseArgs: BadgeProps = {
	children: 'Badge',
	color: 'primary',
	size: 'md',
	variant: 'solid',
};

export const Solid: Story = {
	args: baseArgs,
};

export const Subtle: Story = {
	args: {
		...baseArgs,
		variant: 'subtle',
	},
};

export const Palette: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
			<Badge color="primary">Primary</Badge>
			<Badge color="secondary">Secondary</Badge>
			<Badge color="success">Success</Badge>
			<Badge color="warning">Warning</Badge>
			<Badge color="primary" variant="subtle">
				Primary Subtle
			</Badge>
			<Badge color="secondary" variant="subtle">
				Secondary Subtle
			</Badge>
			<Badge color="success" variant="subtle">
				Success Subtle
			</Badge>
			<Badge color="warning" variant="subtle">
				Warning Subtle
			</Badge>
			<Badge color="primary" variant="outlined">
				Primary Outlined
			</Badge>
			<Badge color="secondary" variant="outlined">
				Secondary Outlined
			</Badge>
			<Badge color="success" variant="outlined">
				Success Outlined
			</Badge>
			<Badge color="warning" variant="outlined">
				Warning Outlined
			</Badge>
		</div>
	),
};
