import classnames from 'classnames';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Typography } from '../typography/typography';
import classes from './switch.module.scss';

export type SwitchProps = {
	label: ReactNode;
	description?: ReactNode;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	dataTestId?: string;
	className?: string;
};

export function Switch({
	label,
	description,
	checked,
	defaultChecked = false,
	onChange,
	disabled,
	dataTestId,
	className,
}: SwitchProps) {
	const [internalChecked, setInternalChecked] = useState(defaultChecked);
	const isControlled = typeof checked === 'boolean';
	const isChecked = isControlled ? checked : internalChecked;

	const toggle = () => {
		if (disabled) return;
		onChange?.(!isChecked);
		if (!isControlled) {
			setInternalChecked(!isChecked);
		}
	};

	return (
		<button
			type="button"
			role="switch"
			aria-checked={isChecked}
			aria-label={typeof label === 'string' ? label : undefined}
			onClick={toggle}
			disabled={disabled}
			className={classnames(
				classes.switch,
				className,
				isChecked && classes['switch--checked'],
				disabled && classes['switch--disabled']
			)}
			data-testid={dataTestId}
		>
			<span className={classes.switch__track}>
				<span className={classes.switch__thumb} />
			</span>
			<span className={classes.switch__content}>
				<Typography
					component="span"
					variant="h3"
					className={classes.switch__label}
				>
					{label}
				</Typography>
				{description && (
					<Typography
						component="span"
						fontSize="sm"
						color="var(--color-text-muted)"
					>
						{description}
					</Typography>
				)}
			</span>
		</button>
	);
}
