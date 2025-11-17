import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Grid } from './grid';

import classes from './grid.module.scss';

const gridChildren = (
	<>
		<div>item1</div>
		<div>item2</div>
		<div>item3</div>
		<div>item4</div>
	</>
);

describe('Grid', () => {
	it('renders component', () => {
		render(<Grid dataTestId="GridTestId">{gridChildren}</Grid>);

		const element = screen.getByTestId('GridTestId');

		expect(element).toBeInTheDocument();

		expect(element).toHaveClass(classes.grid);

		expect(element).toHaveStyle({
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: 'var(--spacing-4)',
		});
	});

	it('allows overriding columns and gap and add style', () => {
		render(
			<Grid
				columns={4}
				gap="16px"
				dataTestId="GridTestId"
				style={{ backgroundColor: 'red' }}
			>
				{gridChildren}
			</Grid>
		);

		const element = screen.getByTestId('GridTestId');
		expect(element).toBeInTheDocument();

		expect(element.style.gridTemplateColumns).toBe('repeat(4, 1fr)');
		expect(element.style.gap).toBe('16px');
		expect(element.style.backgroundColor).toBe('red');
	});
});
