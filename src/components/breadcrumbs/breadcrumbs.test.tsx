import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumbs } from './breadcrumbs';

const onClickMock = vi.fn();

const items = [
	{ label: 'Home', href: '/' },
	{ label: 'Library', onClick: onClickMock },
	{ label: 'Book' },
];

describe('Breadcrumbs', () => {
	afterEach(cleanup);
	it('marks last item as current page', () => {
		render(<Breadcrumbs items={items} />);

		const current = screen.getByText('Book');
		expect(current).toHaveStyle('color: var(--color-text)');
	});

	it('should call onClick', async () => {
		const user = userEvent.setup();
		render(<Breadcrumbs items={items} />);

		const btn = screen.getByText('Library');

		await user.click(btn);

		expect(onClickMock).toHaveBeenCalledOnce();
	});
});
