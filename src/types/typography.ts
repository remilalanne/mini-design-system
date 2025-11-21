import type { MainSizes } from './sizes';
export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body'
	| 'caption';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';
export type TypographyWeight = 'normal' | 'semibold' | 'bold';
export type TypographySize = MainSizes | 'xs' | 'xl';
