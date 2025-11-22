import classnames from 'classnames';
import type { ReactNode } from 'react';
import { useId, useState } from 'react';
import { Typography } from '../typography/typography';
import classes from './accordion.module.scss';

export type AccordionItem = {
	id: string;
	title: ReactNode;
	content: ReactNode;
	disabled?: boolean;
};

export type AccordionProps = {
	items: AccordionItem[];
	allowMultiple?: boolean;
	defaultExpandedIds?: string[];
	expandedIds?: string[];
	onChange?: (ids: string[]) => void;
	dataTestId?: string;
	className?: string;
};

export function Accordion({
	items,
	allowMultiple = false,
	defaultExpandedIds = [],
	expandedIds,
	onChange,
	dataTestId,
	className,
}: AccordionProps) {
	const [internalExpanded, setInternalExpanded] =
		useState(defaultExpandedIds);
	const activeItems = expandedIds ?? internalExpanded;
	const panelPrefix = useId();

	const toggleItem = (id: string, disabled?: boolean) => {
		if (disabled) return;
		const isOpen = activeItems.includes(id);
		let nextExpanded: string[];

		if (allowMultiple) {
			nextExpanded = isOpen
				? activeItems.filter((itemId) => itemId !== id)
				: [...activeItems, id];
		} else {
			nextExpanded = isOpen ? [] : [id];
		}

		onChange?.(nextExpanded);

		if (expandedIds === undefined) {
			setInternalExpanded(nextExpanded);
		}
	};

	return (
		<div
			className={classnames(classes.accordion, className)}
			data-testid={dataTestId}
		>
			{items.map((item) => {
				const isOpen = activeItems.includes(item.id);
				const panelId = `${panelPrefix}-panel-${item.id}`;
				const headingId = `${panelPrefix}-header-${item.id}`;

				return (
					<section key={item.id} className={classes.accordion__item}>
						<Typography
							className={classes.accordion__header}
							variant="h3"
						>
							<button
								type="button"
								className={classnames(
									classes.accordion__trigger,
									isOpen &&
										classes['accordion__trigger--open']
								)}
								aria-expanded={isOpen}
								aria-controls={panelId}
								onClick={() =>
									toggleItem(item.id, item.disabled)
								}
								disabled={item.disabled}
							>
								{item.title}
							</button>
						</Typography>
						<div
							id={panelId}
							role="region"
							aria-labelledby={headingId}
							className={classnames(
								classes.accordion__panel,
								isOpen && classes['accordion__panel--open']
							)}
						>
							{isOpen && item.content}
						</div>
					</section>
				);
			})}
		</div>
	);
}
