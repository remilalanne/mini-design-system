import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { MainSizes } from '../../types/sizes';
import classes from './box.module.scss';

export type BoxProps = {
	children: ReactNode;
	padding?: MainSizes;
	elevation?: 0 | 1 | 2 | 3;
	borderColor?: string;
	radius?: MainSizes | 'none';
	classNames?: string;
	dataTestId?: string;
};

export function Box({
	children,
	padding = 'md',
	elevation = 1,
	borderColor = 'var(--color-border)',
	radius = 'md',
	classNames,
	dataTestId,
}: BoxProps) {
	return (
		<div
			className={classnames(
				classes.Box,
				classNames,
				classes[`Box--padding-${padding}`],
				classes[`Box--elevation-${elevation}`],
				classes[`Box--radius-${radius}`]
			)}
			style={{ borderColor }}
			data-testid={dataTestId}
		>
			{children}
		</div>
	);
}
