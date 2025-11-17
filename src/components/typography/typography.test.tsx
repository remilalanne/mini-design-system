import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Typography } from './typography';

import classes from './typography.module.scss';

describe('Typography', () => {
	it('renders default body text', () => {
		render(<Typography dataTestId="typography">Hello world</Typography>);

		const element = screen.getByTestId('typography');

		expect(element.tagName).toBe('P');
		expect(element).toHaveClass(classes.typography);
		expect(element).toHaveClass(classes['typography--body']);
		expect(element).toHaveClass(classes['typography--align-left']);
		expect(element).toHaveClass(classes['typography--weight-normal']);
		expect(element).not.toHaveClass(classes['typography--gutter-bottom']);
	});

	it('applies variant, alignment, weight and helpers', () => {
		render(
			<Typography
				align="center"
				gutterBottom
				noWrap
				variant="h2"
				weight="bold"
				dataTestId="heading"
			>
				Heading text
			</Typography>
		);

		const element = screen.getByTestId('heading');

		expect(element.tagName).toBe('H2');
		expect(element).toHaveClass(classes['typography--h2']);
		expect(element).toHaveClass(classes['typography--align-center']);
		expect(element).toHaveClass(classes['typography--weight-bold']);
		expect(element).toHaveClass(classes['typography--gutter-bottom']);
		expect(element).toHaveClass(classes['typography--no-wrap']);
	});

	it('allows overriding rendered element and color', () => {
		render(
			<Typography
				component="span"
				variant="caption"
				color="tomato"
				dataTestId="caption"
			>
				Muted caption
			</Typography>
		);

		const element = screen.getByTestId('caption');

		expect(element.tagName).toBe('SPAN');
		expect(element).toHaveClass(classes['typography--caption']);
		expect(element).toHaveStyle({ color: 'rgb(255, 99, 71)' });
	});
});
