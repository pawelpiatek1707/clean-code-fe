import Table from 'antd/es/table';
import { Container } from './Users.styles';
import { columns, data } from './mocks/usersMock';

const Users = () => {
  return (
    <Container>
      <Table columns={columns} dataSource={data} size="middle" pagination={false} />
    </Container>
  );
};

export default Users;
