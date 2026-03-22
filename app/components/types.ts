import type React from 'react';

export type Align = 'left' | 'center' | 'right';

export interface IColumn<T extends object, K extends keyof T = keyof T> {
  key: K;
  title: string;
  width?: number | string;
  align?: Align;
  sortable?: boolean;
  render?: (value: T[K], row: T) => React.ReactNode;
}