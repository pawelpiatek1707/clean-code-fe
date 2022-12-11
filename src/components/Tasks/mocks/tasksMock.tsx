import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteButton, EditButton } from '@/components/common';
import { TableTask } from '../types';

export const columns: ColumnsType<TableTask> = [
  { title: 'Tytuł', dataIndex: 'title' },
  { title: 'Opis', dataIndex: 'description' },
  { title: 'Status', dataIndex: 'isChecked' },
  {
    title: '',
    key: 'action',
    render: () => (
      <Space size="middle">
        <DeleteButton />
        <EditButton />
      </Space>
    )
  }
];

export const data: TableTask[] = [
  {
    key: '1',
    title: 'Zadanie 1',
    description: 'Opis pierwszego zadania',
    isChecked: 'W trakcie'
  },
  {
    key: '1',
    title: 'Zadanie 2',
    description: 'Opis pierwszego zadania',
    isChecked: 'Zakończone'
  },
  {
    key: '1',
    title: 'Zadanie 3',
    description: 'Opis pierwszego zadania',
    isChecked: 'Zakończone'
  },
  {
    key: '1',
    title: 'Zadanie 4',
    description: 'Opis pierwszego zadania',
    isChecked: 'W trakcie'
  }
];
