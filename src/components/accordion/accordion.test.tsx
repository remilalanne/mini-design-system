import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Accordion } from './accordion';

const user = userEvent.setup();

const items = [
	{ id: '1', title: 'Item 1', content: 'Content 1' },
	{ id: '2', title: 'Item 2', content: 'Content 2' },
];

describe('Accordion', () => {
	it('expands and collapses item', async () => {
		render(<Accordion items={items} />);

		const trigger = screen.getByRole('button', { name: 'Item 1' });
		await user.click(trigger);
		expect(screen.getByText('Content 1')).toBeInTheDocument();
		await user.click(trigger);
		expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
	});

	it('supports multiple expanded items', async () => {
		render(
			<Accordion items={items} allowMultiple defaultExpandedIds={['1']} />
		);

		await user.click(screen.getByRole('button', { name: 'Item 2' }));
		expect(screen.getByText('Content 1')).toBeInTheDocument();
		expect(screen.getByText('Content 2')).toBeInTheDocument();
	});
});
