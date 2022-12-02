import Table from 'antd/es/table';
import { Container, Header } from './Users.styles';
import { columns, data } from './mocks/usersMock';

const Users = () => {
  return (
    <Container>
      <Header>Użytkownicy</Header>
      <Table columns={columns} dataSource={data} size="middle" pagination={false} />
    </Container>
  );
};

export default Users;
