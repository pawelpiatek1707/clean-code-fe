import { useState } from 'react';
import Table from 'antd/es/table';
import { Space, Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { AddUserButton, Container, Header } from './Users.styles';
import { columns, data } from './mocks/usersMock';
import { AddUserModal } from './components/AddUserModal';

const { Title } = Typography;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Container>
      <Header>Użytkownicy</Header>
      <AddUserButton type="link" onClick={handleModalOpen}>
        <Space>
          <PlusOutlined />
          <p>Dodaj użytkownika</p>
        </Space>
      </AddUserButton>
      {!data || data.length === 0 ? (
        <Title level={4}>Brak użytkowników do wyświetlenia :(</Title>
      ) : (
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      )}
      <AddUserModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
    </Container>
  );
};

export default Users;
