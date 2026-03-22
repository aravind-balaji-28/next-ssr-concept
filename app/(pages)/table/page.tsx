"use client";
import React,{JSX} from 'react';
import './table.css';
import { Table } from '@/app/components/Table';
import { IColumn } from '@/app/components/types';

interface User {
  id: number;
  name: string;
  age: number;
  role: string;
}

const columns: IColumn<User>[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'age',
    title: 'Age',
    align: 'left',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    render: (value) => <strong>{String(value)}</strong>,
  },
];

const data: User[] = [
  { id: 1, name: 'Aravind', age: 25, role: 'Frontend' },
  { id: 2, name: 'Kumar', age: 30, role: 'Backend' },
  { id: 3, name: 'Raj', age: 28, role: 'Fullstack' },
];

export default function App(): JSX.Element {
  return (
    <div style={{ padding: 20 }}>
      <Table columns={columns} data={data} rowKey="id" />
    </div>
  );
}