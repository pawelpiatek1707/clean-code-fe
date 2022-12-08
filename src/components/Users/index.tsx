import { useState, useEffect } from 'react';
import Table from 'antd/es/table';
import { Modal, Typography } from 'antd';
import axios from '@/api/axios';
import { User, UsersListResponse } from '@/api/types/user/usersList';
import { CreateUserRequest, CreateUserResponse } from '@/api/types/user/createUser';
import { CREATE_USER, DELETE_USER, GET_USERS } from '@/api/endpoints/user';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { Container, LoaderContainer } from './Users.styles';
import { generateColums } from './mocks/usersMock';
import { AddUserModal } from './components/AddUserModal';
import { transformUsersList } from './helpers';
import { CreateUserFormValues } from './types';
import { DeleteUserResponse } from '@/api/types/user/deleteUser';
import { DeleteuserModal } from './components/DeleteUserModal';


const { Title } = Typography;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<number>()
  const [users, setUsers] = useState<User[]>()
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {

    fetchUsers()

  }, [])

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const handleDeleteUserModalOpen = (userId: number) => {
    setSelectedUser(userId)
    setIsDeleteUserModalOpen(true)
  }

  const handleDeleteUserModalClose = () => {
    setSelectedUser(undefined)
    setIsDeleteUserModalOpen(false)
  }

  const createUser = async (values: CreateUserFormValues) => {
    try {
      const { name, surname, email, password } = values
      const body: CreateUserRequest = {
        Name: name,
        Surname: surname,
        Email: email,
        Password: password
      }
      await axios.post<CreateUserResponse>(CREATE_USER, body)
      fetchUsers()
      handleModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się stworzyć nowego użytkownika'
      })
    }
  }

  const deleteUser = async () => {
    try {
      await axios.get<DeleteUserResponse>(`${DELETE_USER}/${selectedUser}`)
      fetchUsers()
      handleDeleteUserModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się usunąć użytkownika'
      })
    }
  }

  const transformedUsersList = transformUsersList(users)

  const columns = generateColums(handleDeleteUserModalOpen)

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
      <AddUserModal isOpen={isModalOpen} handleModalClose={handleModalClose} handleFormSubmit={createUser} />
      <DeleteuserModal isOpen={isDeleteUserModalOpen} handleModalClose={handleDeleteUserModalClose} handleModalSubmit={deleteUser} />
    </Container>
  );
};

export default Users;
