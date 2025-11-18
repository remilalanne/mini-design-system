import classnames from 'classnames';
import { useId, useState } from 'react';
import type { TabItem } from '../../types/tabs';
import classes from './tabs.module.scss';

export type TabsProps = {
	items: TabItem[];
	activeValue?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	className?: string;
	dataTestId?: string;
};

export function Tabs({
	items,
	activeValue,
	defaultValue,
	onChange,
	className,
	dataTestId,
}: TabsProps) {
	const [internalValue, setInternalValue] = useState(
		defaultValue ?? items[0]?.value
	);
	const selectedValue = activeValue ?? internalValue;
	const tabsId = useId();

	const handleSelect = (value: string, disabled?: boolean) => {
		if (disabled || value === selectedValue) return;

		onChange?.(value);

		if (activeValue === undefined) {
			setInternalValue(value);
		}
	};

	const activeTab = items.find((item) => item.value === selectedValue);

	return (
		<div
			className={classnames(classes.tabs, className)}
			data-testid={dataTestId}
		>
			<div className={classes.tabs__list} role="tablist">
				{items.map((item) => {
					const isActive = item.value === selectedValue;
					const tabId = `${tabsId}-tab-${item.value}`;
					const panelId = `${tabsId}-panel-${item.value}`;

					return (
						<button
							key={item.value}
							type="button"
							role="tab"
							id={tabId}
							aria-controls={panelId}
							aria-selected={isActive}
							className={classnames(classes.tabs__tab, {
								[classes['tabs__tab--active']]: isActive,
							})}
							onClick={() =>
								handleSelect(item.value, item.disabled)
							}
							disabled={item.disabled}
						>
							{item.label}
						</button>
					);
				})}
			</div>

			{activeTab && (
				<div
					role="tabpanel"
					id={`${tabsId}-panel-${activeTab.value}`}
					aria-labelledby={`${tabsId}-tab-${activeTab.value}`}
					className={classes.tabs__panel}
				>
					{activeTab.content}
				</div>
			)}
		</div>
	);
}
