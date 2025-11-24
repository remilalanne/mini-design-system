import classnames from 'classnames';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import type {
	ButtonSizes,
	ButtonVariants,
	RadiusType,
} from '../../types/button';
import { Colors } from '../../types/colors';
import styles from './button.module.scss';

export type ButtonProps = {
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	variant?: ButtonVariants;
	color?: Colors;
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
	color = Colors.Primary,
	borderRadius = 'md',
	size = 'md',
	dataTestId,
	className,
	...rest
}: ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>) {
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
			{...rest}
		>
			{children}
		</button>
	);
}
