import classNames from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import styles from './grid.module.scss';

export type GridProps = {
	children: ReactNode;
	className?: string;
	columns?: number;
	gap?: string;
	style?: CSSProperties;
	dataTestId?: string;
};

export function Grid({
	children,
	className,
	columns = 2,
	gap = 'var(--spacing-4)',
	style,
	dataTestId,
}: GridProps) {
	const gridStyle: CSSProperties = {
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gap,
		...style,
	};

	return (
		<div
			className={classNames(styles.grid, className)}
			style={gridStyle}
			data-testid={dataTestId}
		>
			{children}
		</div>
	);
}
