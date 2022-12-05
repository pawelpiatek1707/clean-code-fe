import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteButton, EditButton } from '@/components/common';

interface DataType {
  key: React.Key;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const columns: ColumnsType<DataType> = [
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

export const data: DataType[] = [
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
