import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Stack } from './stack';

describe('Stack', () => {
	it('render component', () => {
		render(<Stack dataTestId="testId">Test</Stack>);

		expect(screen.getByTestId('testId')).toBeInTheDocument();
	});
});
