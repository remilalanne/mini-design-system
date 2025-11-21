import classnames from 'classnames';
import type { JSX, ReactNode } from 'react';
import type {
	TypographyAlign,
	TypographySize,
	TypographyVariant,
	TypographyWeight,
} from '../../types/typography';
import styles from './typography.module.scss';

const defaultElementByVariant: Record<
	TypographyVariant,
	keyof JSX.IntrinsicElements
> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	body: 'p',
	caption: 'span',
};

export type TypographyProps<T = 'p'> = {
	align?: TypographyAlign;
	children: ReactNode;
	component?: T;
	className?: string;
	color?: string;
	dataTestId?: string;
	gutterBottom?: boolean;
	noWrap?: boolean;
	variant?: TypographyVariant;
	weight?: TypographyWeight;
	fontSize?: TypographySize;
};

export function Typography<T extends keyof JSX.IntrinsicElements = 'p'>({
	align = 'left',
	children,
	component,
	className,
	color,
	dataTestId,
	gutterBottom = false,
	noWrap = false,
	variant = 'body',
	weight,
	fontSize,
}: TypographyProps<T>) {
	const Component = component ?? defaultElementByVariant[variant];

	return (
		<Component
			className={classnames(
				styles.typography,
				styles[`typography--${variant}`],
				styles[`typography--align-${align}`],

				{
					[styles[`typography--weight-${weight}`]]: weight,
					[styles[`typography--size-${fontSize}`]]: fontSize,
					[styles['typography--gutter-bottom']]: gutterBottom,
					[styles['typography--no-wrap']]: noWrap,
				},
				className
			)}
			data-testid={dataTestId}
			style={color ? { color } : undefined}
		>
			{children}
		</Component>
	);
}
