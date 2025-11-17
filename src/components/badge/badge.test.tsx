import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Badge } from './badge';

import classes from './badge.module.scss';

describe('Badge', () => {
	it('renders with default props', () => {
		render(<Badge dataTestId="badge">New</Badge>);

		const badge = screen.getByTestId('badge');

		expect(badge.tagName).toBe('SPAN');
		expect(badge).toHaveClass(classes.badge);
		expect(badge).toHaveClass(classes['badge--primary']);
		expect(badge).toHaveClass(classes['badge--md']);
		expect(badge).toHaveClass(classes['badge--solid']);
	});

	it('applies variant, size and color classes', () => {
		render(
			<Badge
				color="success"
				variant="subtle"
				size="sm"
				dataTestId="custom-badge"
			>
				Success
			</Badge>
		);

		const badge = screen.getByTestId('custom-badge');

		expect(badge).toHaveClass(classes['badge--success']);
		expect(badge).toHaveClass(classes['badge--subtle']);
		expect(badge).toHaveClass(classes['badge--sm']);
	});

	it('merges additional className', () => {
		render(
			<Badge className="extra-class" dataTestId="badge-with-class">
				Styled
			</Badge>
		);

		const badge = screen.getByTestId('badge-with-class');

		expect(badge).toHaveClass('extra-class');
	});
});
