import classnames from 'classnames';
import type { ReactNode } from 'react';
import type { TypographyVariant } from '../../types/typography';
import { Button } from '../button/button';
import { Typography } from '../typography/typography';
import styles from './breadcrumbs.module.scss';

export type BreadcrumbItem = {
	label: ReactNode;
	href?: string;
	onClick?: () => void;
};

export type BreadcrumbsProps = {
	items: BreadcrumbItem[];
	separator?: ReactNode;
	fontVariant?: TypographyVariant;
	dataTestId?: string;
	className?: string;
};

export function Breadcrumbs({
	items,
	separator = '/',
	fontVariant = 'caption',
	dataTestId,
	className,
}: BreadcrumbsProps) {
	return (
		<nav
			aria-label="Breadcrumb"
			className={classnames(styles.breadcrumbs, className)}
			data-testid={dataTestId}
		>
			<ol className={styles.breadcrumbs__list}>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li key={index} className={styles.breadcrumbs__item}>
							{isLast ? (
								<Typography
									variant={fontVariant}
									color="var(--color-text)"
									weight="bold"
								>
									<span aria-current="page">{item.label}</span>
								</Typography>
							) : item.href ? (
								<Typography
									variant={fontVariant}
									color="var(--color-text-muted)"
								>
									<a href={item.href}>{item.label}</a>
								</Typography>
							) : (
								<Button variant="text" onClick={item.onClick}>
									<Typography
										variant={fontVariant}
										color="var(--color-text-muted)"
									>
										{item.label}
									</Typography>
								</Button>
							)}
							{!isLast && (
								<span className={styles.breadcrumbs__separator}>
									{separator}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
