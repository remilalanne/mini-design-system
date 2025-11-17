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
	onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	variant?: ButtonVariants;
	color?: ButtonColors;
	borderRadius?: RadiusType;
	size?: ButtonSizes;
	dataTestId?: string;
};

export function Button({
	children,
	onClick,
	variant = 'contained',
	color = 'primary',
	borderRadius = 'md',
	size = 'md',
	dataTestId,
}: ButtonProps) {
	return (
		<button
			className={classnames(
				styles.button,
				styles[`button--${variant}`],
				styles[`button--${color}`],
				styles[`button--radius-${borderRadius}`],
				styles[`button--${size}`]
			)}
			onClick={onClick}
			data-testid={dataTestId}
		>
			{children}
		</button>
	);
}
