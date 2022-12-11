import { useState, useEffect } from 'react';
import Table from 'antd/es/table';
import { Modal, Typography } from 'antd';
import axios from '@/api/axios';
import { User, UsersListResponse } from '@/api/types/user/usersList';
import { CreateUserRequest, CreateUserResponse } from '@/api/types/user/createUser';
import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USERS } from '@/api/endpoints/user';
import { DeleteUserResponse } from '@/api/types/user/deleteUser';
import { EditUserRequest } from '@/api/types/user/editUser/editUserRequest';
import { EditUserResponse } from '@/api/types/user/editUser/editUserResponse';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { Container, LoaderContainer } from './Users.styles';
import { AddUserModal } from './components/AddUserModal';
import { returnelectedUserData, transformUsersList } from './helpers';
import { CreateUserFormValues, EditUserFormValues } from './types';
import { DeleteuserModal } from './components/DeleteUserModal';
import { generateTableCloumns } from './helpers/generateTableColumns';
import { EditUserModal } from './components/EditUserModal';

const { Title } = Typography;

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false)
  const [isEditUsermodalOpen, setIsEditUserModalOpen] = useState(false)
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

  const handleEditUserModalOpen = (userId: number) => {
    setSelectedUser(userId)
    setIsEditUserModalOpen(true)
  }

  const handleEditUserModalClose = () => {
    setSelectedUser(undefined)
    setIsEditUserModalOpen(false)
  }

  const createUser = async ({ name, surname, email, password }: CreateUserFormValues) => {
    try {
      setLoading(true)
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
    } finally {
      setLoading(false)
    }
  }

  const deleteUser = async () => {
    if (!selectedUser) {
      return
    }
    try {
      setLoading(true)
      await axios.get<DeleteUserResponse>(`${DELETE_USER}/${selectedUser}`)
      fetchUsers()
      handleDeleteUserModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się usunąć użytkownika'
      })
    } finally {
      setLoading(false)
    }
  }

  const editUser = async ({ name, surname, about, city, country, university }: EditUserFormValues) => {
    if (!selectedUser) {
      return
    }
    try {
      const body: EditUserRequest = {
        Name: name,
        Surname: surname,
        AboutMe: about,
        City: city,
        Country: country,
        University: university
      }
      await axios.post<EditUserResponse>(`${EDIT_USER}/${selectedUser}`, body)
      fetchUsers()
      handleEditUserModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się edytować użytkownika'
      })
    }
  }

  const transformedUsersList = transformUsersList(users)

  const columns = generateTableCloumns(handleDeleteUserModalOpen, handleEditUserModalOpen)

  const selectedUserData = returnelectedUserData(users, selectedUser)

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
      <EditUserModal isOpen={isEditUsermodalOpen} handleModalClose={handleEditUserModalClose} handleFormSubmit={editUser} selectedUser={selectedUserData} />
    </Container>
  );
};

export default Users;
