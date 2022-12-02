import { useState } from 'react';
import Table from 'antd/es/table';
import { Typography } from 'antd';
import { AddItemButton, PageHeader, Spacer } from '../common';
import { ButtonContainer, Container } from './Users.styles';
import { columns, data } from './mocks/usersMock';
import { AddUserModal } from './components/AddUserModal';

const { Title } = Typography;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Container>
      <PageHeader>Użytkownicy</PageHeader>
      <AddItemButton text="Dodaj użytkownika" onClick={handleModalOpen} />
      <Spacer height={36} />
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
