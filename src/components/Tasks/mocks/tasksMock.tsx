import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  title: string;
  description: string;
  isChecked: boolean
}

export const columns: ColumnsType<DataType> = [
  { title: 'Tytuł', dataIndex: 'title' },
  { title: 'Opis', dataIndex: 'description' },
  { title: 'Status', dataIndex: 'isChecked' },
  {
    title: '',
    key: 'action',
    render: () => (
      <></>
      //   <Space size="middle">
      //     <Delete />
      //     <Edit />
      //   </Space>
    )
  }
];

export const data: DataType[] = [
  {
    key: '1',
    title: 'Zadanie 1',
    description: 'Opis pierwszego zadania',
    isChecked: true
  },
  {
    key: '1',
    title: 'Zadanie 2',
    description: 'Opis pierwszego zadania',
    isChecked: false
  },
  {
    key: '1',
    title: 'Zadanie 3',
    description: 'Opis pierwszego zadania',
    isChecked: true
  },
  {
    key: '1',
    title: 'Zadanie 4',
    description: 'Opis pierwszego zadania',
    isChecked: false
  }
];
