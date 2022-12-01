import { ColumnsType } from 'antd/es/table';

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
  { title: 'Uniwersytet', dataIndex: 'university' }
];

export const data: DataType[] = [
  {
    key: '1',
    name: 'Jan ',
    surname: 'Kowalski',
    email: 'j.kowalski@gmail.com',
    aboutMe: 'New York No. 1 Lake Park',
    city: 'Katowice',
    country: 'Polska',
    university: 'Uniwersytet Ekonimiczny'
  }
];
