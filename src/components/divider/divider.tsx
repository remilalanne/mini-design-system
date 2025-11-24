import classnames from "classnames";
import { Typography } from "../typography/typography";
import classes from "./divider.module.scss";

export type DividerProps = {
	orientation?: "horizontal" | "vertical";
	label?: string;
	align?: "start" | "center" | "end";
	variant?: "solid" | "dashed";
	length?: string;
	dataTestId?: string;
	className?: string;
};

export function Divider({
	orientation = "horizontal",
	label,
	align = "center",
	variant = "solid",
	length,
	dataTestId,
	className,
}: DividerProps) {
	return (
		<div
			role="separator"
			aria-orientation={orientation}
			className={classnames(
				classes.divider,
				className,
				classes[`divider--${orientation}`],
				classes[`divider--${variant}`],
				classes[`divider--align-${align}`]
			)}
			style={
				orientation === "vertical"
					? { height: length ?? "100%" }
					: undefined
			}
			data-testid={dataTestId}
		>
			{label && (
				<Typography
					variant="caption"
					fontSize="sm"
					className={classes.divider__label}
				>
					{label}
				</Typography>
			)}
		</div>
	);
}
