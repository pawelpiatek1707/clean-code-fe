import { ColumnsType } from 'antd/es/table';
import { Space } from 'antd';
import { DeleteButton, EditButton } from '@/components/common';
import { TableUser } from '../types';

// export const columns: ColumnsType<TableUser> = [
//   { title: 'Imię', dataIndex: 'name' },
//   { title: 'Nazwisko', dataIndex: 'surname' },
//   { title: 'Email', dataIndex: 'email' },
//   { title: 'O mnie', dataIndex: 'aboutMe' },
//   { title: 'Miasto', dataIndex: 'city' },
//   { title: 'Kraj', dataIndex: 'country' },
//   { title: 'Uniwersytet', dataIndex: 'university' },
//   {
//     title: '',
//     key: 'action',
//     render: () => (
//       <Space size="middle">
//         <DeleteButton />
//         <EditButton />
//       </Space>
//     )
//   }
// ];

export const generateColums = (onDelete?: (id: number) => void, onEdit?: (id: number) => void) => {
  const columns: ColumnsType<TableUser> = [
    { title: 'Imię', dataIndex: 'name' },
    { title: 'Nazwisko', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'O mnie', dataIndex: 'aboutMe' },
    { title: 'Miasto', dataIndex: 'city' },
    { title: 'Kraj', dataIndex: 'country' },
    { title: 'Uniwersytet', dataIndex: 'university' },
    {
      title: '',
      key: 'action',
      render: (_: any, record: TableUser) => {
        const userId = Number(record.key)
        const handleDelete = () => {
          if(onDelete) {
            onDelete(userId)
          }
        }
        const handleEdit = () => {
          if(onEdit) {
            onEdit(userId)
          }
        }
        return (
          <Space size="middle">
            <DeleteButton onClick={handleDelete} />
            <EditButton onClick={handleEdit}/>
          </Space>
        )
      }
    }
  ];

  return columns
}

export const data: TableUser[] = [
  {
    key: '1',
    name: 'Jan ',
    surname: 'Kowalski',
    email: 'j.kowalski@gmail.com',
    aboutMe: 'Student',
    city: 'Katowice',
    country: 'Polska',
    university: 'Uniwersytet Ekonimiczny'
  },
  {
    key: '2',
    name: 'Kamil ',
    surname: 'Ślimak',
    email: 'k.slimak@gmail.com',
    aboutMe: 'Student',
    city: 'Zabrze',
    country: 'Polska',
    university: 'Uniwersytet Śląski'
  },
  {
    key: '3',
    name: 'Krzysztof ',
    surname: 'Nowak',
    email: 'k.snowak@gmail.com',
    aboutMe: 'Student',
    city: 'Gliwice',
    country: 'Polska',
    university: 'Politechnika Śląska'
  },
  {
    key: '4',
    name: 'Wojciech',
    surname: 'Wiśniewski',
    email: 'w.wisniewski@gmail.com',
    aboutMe: 'Student',
    city: 'Katowice',
    country: 'Polska',
    university: 'Uniwersytet Ekonimiczny'
  },
  {
    key: '5',
    name: 'Janusz',
    surname: 'Nowak',
    email: 'j.nowak@gmail.com',
    aboutMe: 'student',
    city: 'Katowice',
    country: 'Polska',
    university: 'Politechnika Wrocławska'
  }
];
