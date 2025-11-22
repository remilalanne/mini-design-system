import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Alert } from './alert';

const user = userEvent.setup();

describe('Alert', () => {
	it('renders title and content', () => {
		render(
			<Alert title="Heads up">This is an important message.</Alert>
		);

		expect(screen.getByRole('alert')).toBeInTheDocument();
		expect(screen.getByText('Heads up')).toBeInTheDocument();
	});

	it('calls dismiss when button clicked', async () => {
		const onDismiss = vi.fn();
		render(
			<Alert title="Alert" dismissible onDismiss={onDismiss}>
				Dismiss me
			</Alert>
		);

		await user.click(screen.getByRole('button', { name: /dismiss/i }));
		expect(onDismiss).toHaveBeenCalled();
	});
});
