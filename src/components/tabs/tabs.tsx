import classnames from 'classnames';
import { type KeyboardEvent, useId, useRef, useState } from 'react';
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
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const selectedValue = activeValue ?? internalValue;
	const tabsId = useId();

	const handleSelect = (value: string, disabled?: boolean) => {
		if (disabled || value === selectedValue) return;

		onChange?.(value);

		if (activeValue === undefined) {
			setInternalValue(value);
		}
	};

	const focusTab = (value: string) => {
		requestAnimationFrame(() => {
			tabRefs.current[value]?.focus();
		});
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
		const enabledTabs = items.filter((item) => !item.disabled);
		if (!enabledTabs.length) return;

		const currentIndex = enabledTabs.findIndex(
			(item) => item.value === selectedValue
		);
		const fallbackIndex = currentIndex >= 0 ? currentIndex : 0;

		let nextIndex: number | null = null;

		if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
			nextIndex = (fallbackIndex + 1) % enabledTabs.length;
		} else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
			nextIndex = (fallbackIndex - 1 + enabledTabs.length) % enabledTabs.length;
		} else if (event.key === 'Home') {
			nextIndex = 0;
		} else if (event.key === 'End') {
			nextIndex = enabledTabs.length - 1;
		}

		if (nextIndex === null) return;

		event.preventDefault();
		const nextValue = enabledTabs[nextIndex].value;
		handleSelect(nextValue);
		focusTab(nextValue);
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
							tabIndex={isActive ? 0 : -1}
							className={classnames(classes.tabs__tab, {
								[classes['tabs__tab--active']]: isActive,
							})}
							onKeyDown={handleKeyDown}
							onClick={() =>
								handleSelect(item.value, item.disabled)
							}
							ref={(node) => {
								tabRefs.current[item.value] = node;
							}}
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
