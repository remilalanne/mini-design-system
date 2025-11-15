import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Container } from './container';

import classes from './container.module.scss';

describe('Container', () => {
	it('renders component', () => {
		render(<Container dataTestId="containerId">Content</Container>);

		const element = screen.getByTestId('containerId');

		expect(element).toBeInTheDocument();

		expect(element).toHaveClass(classes.Container);
		expect(element).toHaveClass(classes['Container--center']);
		expect(element).toHaveClass(classes['Container--padding-md']);

		expect(element).toHaveStyle({ maxWidth: '1200px' });
	});

	it('applies custom props into classnames and styles', () => {
		render(
			<Container
				position="right"
				padding="lg"
				maxWidth="960px"
				classNames="extra-class"
				dataTestId="containerId"
			>
				Content
			</Container>
		);

		const element = screen.getByTestId('containerId');

		expect(element).toHaveClass(classes.Container);
		expect(element).toHaveClass(classes['Container--right']);
		expect(element).toHaveClass(classes['Container--padding-lg']);
		expect(element).toHaveClass('extra-class');
		expect(element).toHaveStyle({ maxWidth: '960px' });
		expect(element).toHaveTextContent('Content');
	});
});
