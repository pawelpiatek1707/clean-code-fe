import { Button, Modal, Typography } from 'antd';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserId, removeToken, removeUserId } from '@/api/helpers';
import axios from '@/api/axios';
import { EDIT_USER, USER_DETAILS } from '@/api/endpoints/user';
import { UserDetailsResponse } from '@/api/types/user/userDetails';
import { User } from '@/api/types/user/usersList';
import { ROUTING_PATHS } from '@/enums';
import { ContentLoader, PageHeader, Spacer } from "../common";
import {
  ActionContainer,
  Bold,
  ButtonWrapper,
  Container,
  ContentContainer,
  DataContainer,
  DescriptionContainer,
  LoaderContainer,
  TopContainer,
  UserLogo,
  UserLogoText,
  UserName
} from "./Profile.styles";
import { EditUserModal } from './components/EditUserModal';
import { EditUserDetailsFormValues } from './types';
import { EditUserRequest } from '@/api/types/user/editUser/editUserRequest';
import { EditUserResponse } from '@/api/types/user/editUser/editUserResponse';

const { Title, Text } = Typography

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const [isEditUserDetailsModalOpen, setIsEditUserDetailsModalOpen] = useState(false)
  const [userDetails, setUserDetails] = useState<User>()
  const navigate = useNavigate();

  const fetchProfileData = async () => {
    setLoading(true)
    try {
      const userId = getUserId()
      if (!userId) {
        throw new Error()
      }
      const { data } = await axios.get<UserDetailsResponse>(`${USER_DETAILS}/${userId}`)
      const [userDetailsData] = data
      setUserDetails(userDetailsData)
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się pobrać informacji o użytkowniku'
      })
      removeToken()
      removeUserId()
      navigate(`/${ROUTING_PATHS.SIGN_IN}`);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  const editUserDetails = async ({ name, surname, about, city, country, university }: EditUserDetailsFormValues) => {
    if (!userDetails) {
      return
    }
    setLoading(true)
    try {
      const body: EditUserRequest = {
        Name: name,
        Surname: surname,
        AboutMe: about,
        City: city,
        Country: country,
        University: university
      }
      await axios.post<EditUserResponse>(`${EDIT_USER}/${userDetails.id}`, body)
      await fetchProfileData()
      handleEditUserDetailsModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się zaktualizować danych'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEditUserDetailsModalOpen = () => setIsEditUserDetailsModalOpen(true)

  const handleEditUserDetailsModalClose = () => setIsEditUserDetailsModalOpen(false)

  const Content = (
    <ContentContainer>
      <TopContainer>
        <UserLogo>
          <UserLogoText>
            {userDetails?.name[0]}
            {userDetails?.surname[0]}
          </UserLogoText>
        </UserLogo>
        <UserName>{userDetails?.name} {userDetails?.surname}</UserName>
      </TopContainer>
      <DescriptionContainer>
        <Title level={4}>Opis:</Title>
        <Text>{userDetails?.aboutMe}</Text>
        <Spacer height={32} />
        <DataContainer>
          <Text><Bold>Email:</Bold> {userDetails?.email}</Text>
        </DataContainer>
        <Spacer height={12} />
        <DataContainer>
          <Text><Bold>Miasto:</Bold> {userDetails?.city}</Text>
        </DataContainer>
        <Spacer height={12} />
        <DataContainer>
          <Text><Bold>Kraj:</Bold> {userDetails?.country}</Text>
        </DataContainer>
        <Spacer height={12} />
        <DataContainer>
          <Text><Bold>Uniwersytet:</Bold> {userDetails?.university}</Text>
        </DataContainer>
      </DescriptionContainer>
      <Spacer height={32} />
      <ActionContainer>
        <Button type='primary' onClick={handleEditUserDetailsModalOpen}>Edytuj dnane</Button>
        <ButtonWrapper>
          <Button type='primary'>Zmień hasło</Button>
        </ButtonWrapper>
      </ActionContainer>
    </ContentContainer>
  )

  return (
    <Container>
      <PageHeader>Profil</PageHeader>
      {loading ? (
        <LoaderContainer>
          <ContentLoader />
        </LoaderContainer>
      ) : Content}
      <EditUserModal
        isOpen={isEditUserDetailsModalOpen}
        handleModalClose={handleEditUserDetailsModalClose}
        selectedUser={userDetails}
        handleFormSubmit={editUserDetails}
      />
    </Container>
  )
};

export default Profile;
