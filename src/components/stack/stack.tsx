import classnames from 'classnames';
import type { ReactNode } from 'react';
import type {
	AlignItemsValues,
	FlexWrapValues,
	JustifyContentValues,
} from '../../types/stack';
import styles from './stack.module.scss';

export type StackProps = {
	alignItems?: AlignItemsValues;
	children: ReactNode;
	dataTestId?: string;
	direction?: 'row' | 'column';
	flexGrow?: number;
	flexShrink?: number;
	flexWrap?: FlexWrapValues;
	justifyContent?: JustifyContentValues;
};

export function Stack({
	alignItems = 'start',
	children,
	dataTestId,
	direction = 'row',
	flexGrow = 0,
	flexShrink = 1,
	flexWrap = 'nowrap',
	justifyContent = 'start',
}: StackProps) {
	return (
		<div
			className={classnames(
				styles.stack,
				styles[`align-items-${alignItems}`],
				styles[`direction-${direction}`],
				styles[`flex-wrap-${flexWrap}`],
				styles[`justify-content-${justifyContent}`]
			)}
			data-testid={dataTestId}
			style={{ flexGrow, flexShrink }}
		>
			{children}
		</div>
	);
}
