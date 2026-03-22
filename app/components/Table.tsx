import React, { type JSX, useMemo, useState } from 'react';

import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import type { IColumn } from './types';

export interface ITableProps<T extends object> {
    columns: Array<IColumn<T>>;
    data: T[];
    rowKey: keyof T;
}

type SortOrder = 'asc' | 'desc';

const isNil = (value: unknown): boolean => {
    return value === null || value === undefined;
};
const isComparable = (
    value: unknown,
): value is string | number => {
    return typeof value === 'string' || typeof value === 'number';
};
const compareValues = (
    aValue: unknown,
    bValue: unknown,
    order: SortOrder,
): number => {
    if (aValue === bValue) {
        return 0;
    }

    if (isNil(aValue)) {
        return 1;
    }

    if (isNil(bValue)) {
        return -1;
    }
    if (
        isComparable(aValue) &&
        isComparable(bValue) &&
        aValue > bValue
    ) {
        return order === 'asc' ? 1 : -1;
    }

    return order === 'asc' ? -1 : 1;
};

export function Table<T extends object>(
    props: ITableProps<T>,
): JSX.Element {
    const { columns, data, rowKey } = props;

    const [sortKey, setSortKey] = useState<keyof T | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const handleSort = (key: keyof T): void => {
        if (sortKey === key) {
            setSortOrder((prev: SortOrder): SortOrder => {
                if (prev === 'asc') {
                    return 'desc';
                }

                return 'asc';
            });

            return;
        }

        setSortKey(key);
        setSortOrder('asc');
    };

    const sortedData = useMemo((): T[] => {
        if (sortKey === null) {
            return data;
        }

        return [...data].sort((a: T, b: T): number => {
            return compareValues(a[sortKey], b[sortKey], sortOrder);
        });
    }, [data, sortKey, sortOrder]);

    return (
        <div className="table-container">
            <table className="table">
                <TableHeader
                    columns={columns}
                    sortKey={sortKey}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                />
                <TableBody
                    columns={columns}
                    data={sortedData}
                    rowKey={rowKey}
                />
            </table>
        </div>
    );
}