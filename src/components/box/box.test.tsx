import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Box } from './box';

import classes from './box.module.scss';

describe('Box', () => {
	it('renders component', () => {
		render(<Box dataTestId="testId">Content</Box>);

		const element = screen.getByTestId('testId');

		expect(element).toBeInTheDocument();

		expect(element).toHaveClass(classes.Box);
		expect(element).toHaveClass(classes['Box--padding-md']);
		expect(element).toHaveClass(classes['Box--elevation-1']);
		expect(element).toHaveClass(classes['Box--radius-md']);
	});

	it('renders Box with all props', () => {
		render(
			<Box
				padding="lg"
				elevation={3}
				radius="none"
				borderColor="#ff0000"
				classNames="extra-class"
				dataTestId="testId"
			>
				Box content
			</Box>
		);

		const element = screen.getByTestId('testId');

		expect(element).toHaveClass(classes.Box);
		expect(element).toHaveClass(classes['Box--padding-lg']);
		expect(element).toHaveClass(classes['Box--elevation-3']);
		expect(element).toHaveClass(classes['Box--radius-none']);
		expect(element).toHaveClass('extra-class');
		expect(element).toHaveStyle({ borderColor: '#ff0000' });
		expect(element).toHaveTextContent('Box content');
	});
});
