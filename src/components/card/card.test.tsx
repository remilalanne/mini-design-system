import { render, screen } from '@testing-library/react';
import { Card } from './card';
import classes from './card.module.scss';

describe('Card', () => {
	it('renders header, body and footer', () => {
		render(
			<Card header={<h3>Title</h3>} footer={<span>Footer</span>}>
				Content
			</Card>
		);

		expect(screen.getByText('Title')).toBeInTheDocument();
		expect(screen.getByText('Content')).toBeInTheDocument();
		expect(screen.getByText('Footer')).toBeInTheDocument();
	});

	it('applies variant classes', () => {
		render(
			<Card dataTestId="cardTestId" variant="outlined">
				outlined
			</Card>
		);

		const card = screen.getByTestId('cardTestId');

		expect(card).toHaveClass(classes.card);
		expect(card).toHaveClass(classes['card--outlined']);
	});
});
