import React from 'react';

import type { IColumn } from './types';

type SortOrder = 'asc' | 'desc';

export interface ITableHeaderProps<T extends object> {
  columns: Array<IColumn<T>>;
  sortKey: keyof T | null;
  sortOrder: SortOrder;
  onSort: (key: keyof T) => void;
}

const isSortable = (value: boolean | undefined): boolean => {
  return value === true;
};

const isActiveSort = <T extends object>(
  activeKey: keyof T | null,
  currentKey: keyof T,
): boolean => {
  return activeKey === currentKey;
};

const getCursor = (sortable: boolean | undefined): string => {
  if (isSortable(sortable)) {
    return 'pointer';
  }

  return 'default';
};

const renderSortIcon = <T extends object>(
  sortable: boolean | undefined,
  activeKey: keyof T | null,
  currentKey: keyof T,
  order: SortOrder,
): React.JSX.Element | null => {
  if (!isSortable(sortable)) {
    return null;
  }

  if (!isActiveSort(activeKey, currentKey)) {
    return null;
  }

  return (
    <span className="sort-indicator">
      {order === 'asc' ? '▲' : '▼'}
    </span>
  );
};

export function TableHeader<T extends object>(
  props: ITableHeaderProps<T>,
):React.JSX.Element {
  const { columns, sortKey, sortOrder, onSort } = props;

  return (
    <thead>
      <tr>
        {columns.map((col: IColumn<T>) => (
          <th
            key={String(col.key)}
            style={{
              width: col.width,
              textAlign: col.align ?? 'left',
              cursor: getCursor(col.sortable),
            }}
            onClick={(): void => {
              if (isSortable(col.sortable)) {
                onSort(col.key);
              }
            }}
          >
            <span className="th-content">
              {col.title}
              {renderSortIcon(
                col.sortable,
                sortKey,
                col.key,
                sortOrder,
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}