import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { BadgeColors, BadgeSizes, BadgeVariants } from '../../types/badge';
import classes from './badge.module.scss';

export type BadgeProps = {
	children: ReactNode;
	className?: string;
	color?: BadgeColors;
	size?: BadgeSizes;
	variant?: BadgeVariants;
	dataTestId?: string;
};

export function Badge({
	children,
	className,
	color = 'primary',
	size = 'md',
	variant = 'solid',
	dataTestId,
}: BadgeProps) {
	return (
		<span
			className={classnames(
				classes.badge,
				classes[`badge--${color}`],
				classes[`badge--${size}`],
				classes[`badge--${variant}`],
				className
			)}
			data-testid={dataTestId}
		>
			{children}
		</span>
	);
}
