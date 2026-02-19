import classnames from "classnames";
import { useId } from "react";
import { Colors } from "../../types/colors";
import { Typography } from "../typography/typography";
import classes from "./progressBar.module.scss";

export type ProgressProps = {
	value: number;
	color?: Colors | string;
	max?: number;
	className?: string;
	dataTestId?: string;
	ariaLabel?: string;
};

export type ProgressBarProps = ProgressProps & {
	showValue?: boolean;
	label?: string;
};

export function ProgressBar({
	value,
	color = Colors.Primary,
	max = 100,
	showValue,
	label,
	className,
	dataTestId,
	ariaLabel,
}: ProgressBarProps) {
	const labelId = useId();
	const normalizedValue = Math.min(Math.max(value, 0), max);
	const percent = (normalizedValue / max) * 100;
	const isColorFromColors = Object.values(Colors).includes(color as Colors);

	return (
		<div className={classes.progressBarWrapper} data-testid={dataTestId}>
			{label && (
				<span id={labelId}>
					<Typography component="span" weight="bold">
						{label}
					</Typography>
				</span>
			)}
			<div className={classnames(classes.progressBar, className)}>
				<div
					className={classnames(classes.progressBar__fill, {
						[classes[`progressBar__fill--${color}`]]:
							isColorFromColors,
					})}
					style={{
						width: `${percent}%`,
						backgroundColor: isColorFromColors ? undefined : color,
					}}
					role="progressbar"
					aria-valuenow={normalizedValue}
					aria-valuemin={0}
					aria-valuemax={max}
					aria-label={ariaLabel ?? (label ? undefined : "Progress")}
					aria-labelledby={label ? labelId : undefined}
				/>
			</div>
			{showValue && (
				<Typography component="span" fontSize="sm">{`${Math.round(
					percent,
				)}%`}</Typography>
			)}
		</div>
	);
}

export type ProgressCircleProps = ProgressProps & {
	size?: number;
	strokeWidth?: number;
};

export function ProgressCircle({
	value,
	color = Colors.Primary,
	max = 100,
	size = 64,
	strokeWidth = 6,
	className,
	dataTestId,
	ariaLabel,
}: ProgressCircleProps) {
	const normalizedValue = Math.min(Math.max(value, 0), max);
	const percent = (normalizedValue / max) * 100;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percent / 100) * circumference;
	const isColorFromColors = Object.values(Colors).includes(color as Colors);

	return (
		<div
			className={classnames(classes.progressCircle, className)}
			role="progressbar"
			aria-valuenow={normalizedValue}
			aria-valuemin={0}
			aria-valuemax={max}
			aria-label={ariaLabel ?? "Progress"}
			data-testid={dataTestId}
		>
			<svg width={size} height={size}>
				<circle
					className={classes.progressCircle__track}
					strokeWidth={strokeWidth}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
				/>
				<circle
					className={classnames(classes.progressCircle__indicator, {
						[classes[`progressCircle__indicator--${color}`]]:
							isColorFromColors,
					})}
					style={{
						stroke: isColorFromColors ? undefined : color,
					}}
					strokeWidth={strokeWidth}
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={offset}
					data-testid="progressCircleIndicator"
				/>
			</svg>
			<Typography
				weight="bold"
				component="span"
				className={classes.progressCircle__value}
			>
				{Math.round(percent)}%
			</Typography>
		</div>
	);
}
