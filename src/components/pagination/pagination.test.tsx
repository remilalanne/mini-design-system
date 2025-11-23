import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Pagination } from './pagination';

const user = userEvent.setup();

describe('Pagination', () => {
	it('renders buttons for each page when totalPages <= 5', () => {
		render(<Pagination totalPages={3} />);
		expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();

		expect(screen.queryByText('…')).not.toBeInTheDocument();
	});

	it('updates internal state when clicking a page (uncontrolled)', async () => {
		render(<Pagination totalPages={5} defaultPage={1} />);

		const page3 = screen.getByRole('button', { name: '3' });
		await user.click(page3);

		expect(page3).toHaveAttribute('aria-current', 'page');
	});

	it('does NOT update internal state when controlled', async () => {
		const onChange = vi.fn();
		render(
			<Pagination totalPages={5} currentPage={2} onChange={onChange} />
		);

		await user.click(screen.getByRole('button', { name: '4' }));

		expect(screen.getByRole('button', { name: '2' })).toHaveAttribute(
			'aria-current',
			'page'
		);

		expect(onChange).toHaveBeenCalledWith(4);
	});

	it('calls onChange when clicking a page', async () => {
		const onChange = vi.fn();
		render(<Pagination totalPages={5} onChange={onChange} />);

		await user.click(screen.getByRole('button', { name: '3' }));
		expect(onChange).toHaveBeenCalledWith(3);
	});

	it('disables Prev on first page and Next on last page', () => {
		render(<Pagination totalPages={5} defaultPage={1} />);

		expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();

		expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();
	});

	it('navigates using Prev and Next buttons', async () => {
		render(<Pagination totalPages={5} defaultPage={3} />);

		await user.click(screen.getByRole('button', { name: 'Next' }));
		expect(screen.getByRole('button', { name: '4' })).toHaveAttribute(
			'aria-current',
			'page'
		);

		await user.click(screen.getByRole('button', { name: 'Prev' }));
		expect(screen.getByRole('button', { name: '3' })).toHaveAttribute(
			'aria-current',
			'page'
		);
	});

	it('ignores clicks that go beyond min/max page', async () => {
		const onChange = vi.fn();
		render(
			<Pagination totalPages={5} defaultPage={1} onChange={onChange} />
		);

		await user.click(screen.getByRole('button', { name: 'Prev' }));
		expect(onChange).not.toHaveBeenCalled();
	});

	it('shows ellipsis when more than 5 pages (middle)', () => {
		render(<Pagination totalPages={10} defaultPage={5} />);

		expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '5' })).toHaveAttribute(
			'aria-current',
			'page'
		);
		expect(screen.getByRole('button', { name: '6' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: '10' })).toBeInTheDocument();

		expect(screen.getAllByText('…')).toHaveLength(2);
	});

	it('shows ellipsis only on the right when near the start', () => {
		render(<Pagination totalPages={10} defaultPage={1} />);

		expect(screen.getAllByText('…')).toHaveLength(1);
		expect(screen.queryByRole('button', { name: '2' })).toBeInTheDocument();
	});

	it('shows ellipsis only on the left when near the end', () => {
		render(<Pagination totalPages={10} defaultPage={10} />);

		expect(screen.getAllByText('…')).toHaveLength(1);
		expect(screen.queryByRole('button', { name: '9' })).toBeInTheDocument();
	});
});
