import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteButton, EditButton } from '@/components/common';
import { TableEvent } from '../types';

export const columns: ColumnsType<TableEvent> = [
  { title: 'Tytuł', dataIndex: 'title' },
  { title: 'Opis', dataIndex: 'description' },
  { title: 'Data rozpoczęcia', dataIndex: 'startDate' },
  { title: 'Data zakończenia', dataIndex: 'endDate' },
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

export const data: TableEvent[] = [
  {
    key: '1',
    title: 'Wydarzenie 1',
    description: 'Opis pierwszego wydarzenia',
    startDate: '02.12.2022',
    endDate: '02.12.2022'
  },
  {
    key: '1',
    title: 'Wydarzenie 1',
    description: 'Opis pierwszego wydarzenia',
    startDate: '02.12.2022',
    endDate: '02.12.2022'
  },
  {
    key: '1',
    title: 'Wydarzenie 1',
    description: 'Opis pierwszego wydarzenia',
    startDate: '02.12.2022',
    endDate: '02.12.2022'
  },
  {
    key: '1',
    title: 'Wydarzenie 1',
    description: 'Opis pierwszego wydarzenia',
    startDate: '02.12.2022',
    endDate: '02.12.2022'
  }
];
