import classnames from 'classnames';
import { useState } from 'react';
import { Button } from '../button/button';
import classes from './pagination.module.scss';

export type PaginationProps = {
	totalPages: number;
	currentPage?: number;
	defaultPage?: number;
	onChange?: (page: number) => void;
	className?: string;
	dataTestId?: string;
};

export function Pagination({
	totalPages,
	currentPage,
	defaultPage = 1,
	onChange,
	className,
	dataTestId,
}: PaginationProps) {
	const [internalPage, setInternalPage] = useState(defaultPage);
	const activePage = currentPage ?? internalPage;

	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		onChange?.(page);
		if (currentPage === undefined) {
			setInternalPage(page);
		}
	};

	const buildPages = () => {
		if (totalPages <= 5) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		const pages: (number | 'ellipsis')[] = [];

		const first = 1;
		const last = totalPages;

		pages.push(first);

		let start = activePage - 1;
		let end = activePage + 1;

		if (start <= 2) {
			start = 2;
			end = 4;
		}

		if (end >= last - 1) {
			start = last - 3;
			end = last - 1;
		}

		if (start > 2) {
			pages.push('ellipsis');
		}

		for (let i = start; i <= end; i++) {
			if (i > first && i < last) {
				pages.push(i);
			}
		}

		if (end < last - 1) {
			pages.push('ellipsis');
		}

		pages.push(last);

		return pages;
	};

	const pages = buildPages();

	return (
		<nav
			className={classnames(classes.pagination, className)}
			aria-label="Pagination"
			data-testid={dataTestId}
		>
			<Button
				variant="outlined"
				size="xs"
				onClick={() => goToPage(activePage - 1)}
				disabled={activePage === 1}
			>
				Prev
			</Button>

			<ul className={classes.pagination__list}>
				{pages.map((item, index) => {
					if (item === 'ellipsis') {
						return (
							<li
								key={`ellipsis-${index}`}
								className={classes.pagination__ellipsis}
							>
								…
							</li>
						);
					}

					const pageNumber = item as number;

					return (
						<li key={pageNumber}>
							<Button
								variant={
									pageNumber === activePage
										? 'contained'
										: 'outlined'
								}
								size="xs"
								onClick={() => goToPage(pageNumber)}
								aria-current={
									pageNumber === activePage
										? 'page'
										: undefined
								}
							>
								{pageNumber}
							</Button>
						</li>
					);
				})}
			</ul>

			<Button
				variant="outlined"
				size="xs"
				onClick={() => goToPage(activePage + 1)}
				disabled={activePage === totalPages}
			>
				Next
			</Button>
		</nav>
	);
}
