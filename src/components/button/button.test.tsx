import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Button } from './button';

describe('Button', () => {
	it('render component', () => {
		render(<Button dataTestId="testId">Test</Button>);

		expect(screen.getByTestId('testId')).toBeInTheDocument();
	});
});
