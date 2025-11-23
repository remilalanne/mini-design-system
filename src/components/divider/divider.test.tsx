import { render, screen } from '@testing-library/react';
import { Divider } from './divider';
import styles from './divider.module.scss';

describe('Divider', () => {
	it('renders label when provided', () => {
		render(<Divider label="Section" />);

		expect(screen.getByText('Section')).toBeInTheDocument();
	});

	it('applies vertical orientation class', () => {
		render(<Divider orientation="vertical" dataTestId="divider" />);

		const divider = screen.getByTestId('divider');
		expect(divider).toHaveClass(styles['divider--vertical']);
	});
});
