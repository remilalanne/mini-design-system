import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { MainSizes } from '../../types/sizes';
import classes from './container.module.scss';

export type ContainerProps = {
	children: ReactNode;
	maxWidth?: string;
	position?: 'left' | 'right' | 'center';
	padding?: MainSizes;
	classNames?: string;
	dataTestId?: string;
};

export function Container({
	children,
	maxWidth = '1200px',
	position = 'center',
	padding = 'md',
	classNames,
	dataTestId,
}: ContainerProps) {
	return (
		<div
			className={classnames(
				classes.Container,
				classes[`Container--${position}`],
				classes[`Container--padding-${padding}`],
				classNames
			)}
			data-testid={dataTestId}
			style={{ maxWidth }}
		>
			{children}
		</div>
	);
}
