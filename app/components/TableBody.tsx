import React, { JSX } from 'react';

import type { IColumn } from './types';

export interface ITableBodyProps<T extends object> {
  columns: Array<IColumn<T>>;
  data: T[];
  rowKey: keyof T;
}

const renderCell = <T extends object>(
  col: IColumn<T>,
  row: T,
): React.ReactNode => {
  const value = row[col.key];

  if (col.render !== undefined) {
    return col.render(value, row);
  }

  return String(value);
};

export function TableBody<T extends object>(
  props: ITableBodyProps<T>,
): JSX.Element {
  const { columns, data, rowKey } = props;

  return (
    <tbody>
      {data.map((row: T) => (
        <tr key={String(row[rowKey])}>
          {columns.map((col: IColumn<T>) => (
            <td
              key={String(col.key)}
              style={{ textAlign: col.align ?? 'left' }}
            >
              {renderCell(col, row)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}