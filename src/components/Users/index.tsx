import { useState, useEffect } from 'react';
import Table from 'antd/es/table';
import { Modal, Typography } from 'antd';
import axios from '@/api/axios';
import { User, UsersListResponse } from '@/api/types/user/usersList';
import { GET_USERS } from '@/api/endpoints/user';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { Container, LoaderContainer } from './Users.styles';
import { columns } from './mocks/usersMock';
import { AddUserModal } from './components/AddUserModal';
import { transformUsersList } from './helpers';

const { Title } = Typography;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get<UsersListResponse>(GET_USERS)
        setUsers(data)
      } catch (e: unknown) {
        Modal.error({
          title: 'Błąd',
          content: 'Nie udało się pobrać listy użytkowników'
        })
      } finally {
        setLoading(false)
      }

    }

    fetchUsers()

  }, [])

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const transformedUsersList = transformUsersList(users)

  const renderedContent = loading ? (
    <LoaderContainer>
      <ContentLoader />
    </LoaderContainer>
  ) : !transformedUsersList || !transformedUsersList.length ? (
    <Title level={4}>Brak użytkowników do wyświetlenia :(</Title>
  ) : (
    <Table columns={columns} dataSource={transformedUsersList} size="middle" pagination={false} />
  )

  return (
    <Container>
      <PageHeader>Użytkownicy</PageHeader>
      <AddItemButton text="Dodaj użytkownika" onClick={handleModalOpen} />
      <Spacer height={36} />
      {renderedContent}
      <AddUserModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
    </Container>
  );
};

export default Users;
