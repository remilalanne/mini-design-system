import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Switch } from './switch';
import classes from './switch.module.scss';

const user = userEvent.setup();

describe('Switch', () => {
	it('toggles state when clicked', async () => {
		render(<Switch label="Notifications" />);

		const control = screen.getByRole('switch');
		expect(control).toHaveAttribute('aria-checked', 'false');
		await user.click(control);
		expect(control).toHaveAttribute('aria-checked', 'true');
	});

	it('calls onChange when provided', async () => {
		const onChange = vi.fn();
		render(
			<Switch label="Dark mode" checked={false} onChange={onChange} />
		);

		const control = screen.getByRole('switch');
		await user.click(control);
		expect(onChange).toHaveBeenCalledWith(true);
	});

	it('applies right class if disable', () => {
		render(<Switch label="Dark mode" disabled />);

		const control = screen.getByRole('switch');

		expect(control).toHaveClass(classes['switch--disabled']);
	});
});
