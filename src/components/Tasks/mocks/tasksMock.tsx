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

