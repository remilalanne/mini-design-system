import type { ReactNode } from 'react';

export type TabItem = {
	content: ReactNode;
	disabled?: boolean;
	label: ReactNode;
	value: string;
};
