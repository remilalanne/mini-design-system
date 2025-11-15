import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Stack } from './stack';

import classes from './stack.module.scss';

describe('Stack', () => {
	it('renders component', () => {
		render(<Stack dataTestId="testId">Test</Stack>);

		const element = screen.getByTestId('testId');

		expect(element).toBeInTheDocument();

		expect(element).toHaveClass(classes['align-items-start']);
		expect(element).toHaveClass(classes['direction-row']);
		expect(element).toHaveClass(classes['flex-wrap-nowrap']);
		expect(element).toHaveClass(classes['justify-content-start']);
	});

	it('applies classnames based on props', () => {
		render(
			<Stack
				alignItems="center"
				direction="row"
				flexWrap="wrap"
				justifyContent="space-between"
				dataTestId="stack"
			>
				Content
			</Stack>
		);

		const element = screen.getByTestId('stack');

		expect(element).toHaveClass(classes.stack);
		expect(element).toHaveClass(classes['align-items-center']);
		expect(element).toHaveClass(classes['direction-row']);
		expect(element).toHaveClass(classes['flex-wrap-wrap']);
		expect(element).toHaveClass(classes['justify-content-space-between']);
	});

	it('applies flexGrow and flexShrink as inline styles', () => {
		render(
			<Stack dataTestId="stack" flexGrow={3} flexShrink={0}>
				Item
			</Stack>
		);

		const element = screen.getByTestId('stack');

		expect(element).toHaveStyle({ flexGrow: '3' });
		expect(element).toHaveStyle({ flexShrink: '0' });
	});
});
