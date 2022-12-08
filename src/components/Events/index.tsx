import axios from '@/api/axios';
import { CREATE_EVENT, GET_EVENTS } from '@/api/endpoints/event';
import { CreateEventRequest, CreateEventResponse } from '@/api/types/event/createEvent';
import { Event, EventsListresponse } from '@/api/types/event/eventsList';
import { Modal, Typography } from 'antd';
import Table from 'antd/es/table';
import { useState, useEffect } from 'react';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { AddEventModal } from './components/AddEvent';
import { Container, LoaderContainer } from './Events.styles';
import { generateTableColumns, transformEventsList } from './helpers';
import { AddEventFormValues } from './types/AddEventFormValues';

const { Title } = Typography;

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState<Event[]>()

  const fetchEvents = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<EventsListresponse>(GET_EVENTS)
      setEvents(data)
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się pobrać listy wydarzań'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const createEvent = async ({ title, description, startDate, endDate }: AddEventFormValues) => {
    try {
      setLoading(true)
      const body: CreateEventRequest = {
        Title: title,
        Description: description,
        StartDate: startDate,
        EndDate: endDate
      }
      await axios.post<CreateEventResponse>(CREATE_EVENT, body)
      fetchEvents()
      handleModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się stworzyć nowego wydarzenia'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const transformedEventsList = transformEventsList(events)

  const columns = generateTableColumns()

  const renderedContent = loading ? (
    <LoaderContainer>
      <ContentLoader />
    </LoaderContainer>
  ) : !transformEventsList || !transformedEventsList.length ? (
    <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
  ) : (
    <Table columns={columns} dataSource={transformedEventsList} size="middle" pagination={false} />
  )

  return (
    <Container>
      <PageHeader>Wydarzenia</PageHeader>
      <AddItemButton text="Utwórz wydarzenie" onClick={handleModalOpen} />
      <Spacer height={36} />
      {renderedContent}
      <AddEventModal isOpen={isModalOpen} handleModalClose={handleModalClose} handleFormSubmit={createEvent}/>
    </Container>
  );
};

export default Events;
