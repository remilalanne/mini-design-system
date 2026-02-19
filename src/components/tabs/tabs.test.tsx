import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';
import { Tabs } from './tabs';

import classes from './tabs.module.scss';

const items = [
	{ label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
	{ label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
	{ label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
];

describe('Tabs', () => {
	it('renders with first tab active by default', () => {
		render(<Tabs items={items} dataTestId="tabs" />);

		const tabs = screen.getByTestId('tabs');
		const tabButtons = screen.getAllByRole('tab');

		expect(tabs).toBeInTheDocument();
		expect(tabButtons).toHaveLength(3);
		expect(tabButtons[0]).toHaveClass(classes.tabs__tab);
		expect(tabButtons[0]).toHaveClass(classes['tabs__tab--active']);
		expect(screen.getByText('Content 1')).toBeInTheDocument();
	});

	it('changes active tab on click in uncontrolled mode', async () => {
		const user = userEvent.setup();
		render(<Tabs items={items} defaultValue="tab1" />);

		const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
		await user.click(tab2);

		expect(tab2).toHaveClass(classes['tabs__tab--active']);
		expect(screen.getByText('Content 2')).toBeInTheDocument();
	});

	it('calls onChange in controlled mode and does not change without prop update', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(<Tabs items={items} activeValue="tab1" onChange={onChange} />);

		const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
		await user.click(tab3);

		expect(onChange).toHaveBeenCalledWith('tab3');
		expect(screen.getByText('Content 1')).toBeInTheDocument();
	});

	it('supports arrow key and end/home navigation in uncontrolled mode', async () => {
		const user = userEvent.setup();
		render(<Tabs items={items} defaultValue="tab1" />);

		const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
		tab1.focus();

		await user.keyboard('{ArrowRight}');
		const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
		expect(tab2).toHaveClass(classes['tabs__tab--active']);
		await waitFor(() => expect(tab2).toHaveFocus());
		expect(tab2).toHaveAttribute('tabindex', '0');
		expect(tab1).toHaveAttribute('tabindex', '-1');

		await user.keyboard('{End}');
		const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
		expect(tab3).toHaveClass(classes['tabs__tab--active']);
		await waitFor(() => expect(tab3).toHaveFocus());

		await user.keyboard('{Home}');
		expect(tab1).toHaveClass(classes['tabs__tab--active']);
		await waitFor(() => expect(tab1).toHaveFocus());
	});

	it('skips disabled tabs during keyboard navigation', async () => {
		const user = userEvent.setup();
		render(
			<Tabs
				items={[
					items[0],
					{ ...items[1], disabled: true },
					items[2],
				]}
				defaultValue="tab1"
			/>
		);

		const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
		const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
		tab1.focus();

		await user.keyboard('{ArrowRight}');

		expect(tab3).toHaveClass(classes['tabs__tab--active']);
		await waitFor(() => expect(tab3).toHaveFocus());
	});
});
