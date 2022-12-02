import { ColumnsType } from 'antd/es/table';
import { Space } from 'antd';
import { Delete, Edit } from '../Users.styles';

interface DataType {
  key: React.Key;
  name: string;
  surname: string;
  email: string;
  aboutMe: string;
  city: string;
  country: string;
  university: string;
}

export const columns: ColumnsType<DataType> = [
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
    render: () => (
      <Space size="middle">
        <Delete />
        <Edit />
      </Space>
    )
  }
];

export const data: DataType[] = [
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