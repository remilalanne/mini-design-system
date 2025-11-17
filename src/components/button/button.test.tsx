import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';
import { Button } from './button';

import classes from './button.module.scss';

describe('Button', () => {
	it('renders component', () => {
		render(<Button dataTestId="testId">Click Me</Button>);

		const btn = screen.getByTestId('testId');

		expect(btn).toBeInTheDocument();

		expect(btn).toHaveClass(classes.button);
		expect(btn).toHaveClass(classes['button--contained']);
		expect(btn).toHaveClass(classes['button--primary']);
		expect(btn).toHaveClass(classes['button--radius-md']);
		expect(btn).toHaveClass(classes['button--md']);
	});

	it('applies classes based on provided props', () => {
		render(
			<Button
				variant="outlined"
				color="success"
				borderRadius="lg"
				size="sm"
				dataTestId="btn"
			>
				Styled Button
			</Button>
		);

		const btn = screen.getByTestId('btn');

		expect(btn).toHaveClass(classes.button);
		expect(btn).toHaveClass(classes['button--outlined']);
		expect(btn).toHaveClass(classes['button--success']);
		expect(btn).toHaveClass(classes['button--radius-lg']);
		expect(btn).toHaveClass(classes['button--sm']);
	});

	it('supports warning color', () => {
		render(
			<Button variant="contained" color="warning" dataTestId="warn-btn">
				Warn
			</Button>
		);

		const btn = screen.getByTestId('warn-btn');

		expect(btn).toHaveClass(classes['button--warning']);
	});

	it('fires onClick when clicked', async () => {
		const handleClick = vi.fn();
		const user = userEvent.setup();
		render(<Button onClick={handleClick}>Click</Button>);

		const btn = screen.getByText('Click');
		await user.click(btn);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
