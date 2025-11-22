import classnames from 'classnames';
import type { ReactNode } from 'react';
import classes from './alert.module.scss';

export type AlertProps = {
	variant?: 'info' | 'success' | 'warning' | 'error';
	title?: ReactNode;
	children?: ReactNode;
	onDismiss?: () => void;
	dismissible?: boolean;
	dataTestId?: string;
	className?: string;
};

export function Alert({
	variant = 'info',
	title,
	children,
	onDismiss,
	dismissible,
	dataTestId,
	className,
}: AlertProps) {
	return (
		<div
			role="alert"
			className={classnames(
				classes.alert,
				classes[`alert--${variant}`],
				className
			)}
			data-testid={dataTestId}
		>
			<div className={classes.alert__content}>
				{title && <div>{title}</div>}
				{children && <div>{children}</div>}
			</div>
			{dismissible && (
				<button
					type="button"
					className={classes.alert__close}
					onClick={onDismiss}
					aria-label="Dismiss alert"
				>
					×
				</button>
			)}
		</div>
	);
}
