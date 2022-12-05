import { Typography } from 'antd';
import Table from 'antd/es/table';
import { AddItemButton, PageHeader, Spacer } from "../common";
import { Container } from "./Task.styles";
import { data, columns } from './mocks/tasksMock';

const { Title } = Typography;

const Tasks = () => {
  return (
    <Container>
      <PageHeader>Zadania</PageHeader>
      <AddItemButton text="Utwórz zadanie"/>
      <Spacer height={36} />
      {!data || data.length === 0 ? (
        <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
      ) : (
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      )}
    </Container>
  )
};

export default Tasks;
