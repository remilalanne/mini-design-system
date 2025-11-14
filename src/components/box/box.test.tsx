import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Box } from './box';

describe('Box', () => {
	it('render component', () => {
		render(<Box dataTestId="testId">Content</Box>);

		expect(screen.getByTestId('testId')).toBeInTheDocument();
	});
});
