import classnames from 'classnames';
import { type ReactNode } from 'react';
import type {
	ButtonColors,
	ButtonSizes,
	ButtonVariants,
	RadiusType,
} from '../../types/button';
import styles from './button.module.scss';

export type ButtonProps = {
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	variant?: ButtonVariants;
	color?: ButtonColors;
	borderRadius?: RadiusType;
	size?: ButtonSizes;
	dataTestId?: string;
	className?: string;
};

export function Button({
	children,
	disabled,
	onClick,
	variant = 'contained',
	color = 'primary',
	borderRadius = 'md',
	size = 'md',
	dataTestId,
	className,
}: ButtonProps) {
	return (
		<button
			className={classnames(
				className,
				styles.button,
				styles[`button--${variant}`],
				styles[`button--${color}`],
				styles[`button--radius-${borderRadius}`],
				styles[`button--${size}`]
			)}
			onClick={onClick}
			disabled={disabled}
			data-testid={dataTestId}
		>
			{children}
		</button>
	);
}
