import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { MainSizes } from '../../types/sizes';
import classes from './card.module.scss';

export type CardProps = {
	children: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
	padding?: MainSizes;
	spacing?: MainSizes;
	variant?: 'elevated' | 'outlined' | 'subtle';
	dataTestId?: string;
	className?: string;
};

export function Card({
	children,
	header,
	footer,
	padding = 'md',
	spacing = 'md',
	variant = 'elevated',
	dataTestId,
	className,
}: CardProps) {
	return (
		<article
			className={classnames(
				classes.card,
				className,
				classes[`card--padding-${padding}`],
				classes[`card--spacing-${spacing}`],
				classes[`card--${variant}`]
			)}
			data-testid={dataTestId}
		>
			{header && <div className={classes.card__section}>{header}</div>}
			<div className={classes.card__body}>{children}</div>
			{footer && <div className={classes.card__section}>{footer}</div>}
		</article>
	);
}
