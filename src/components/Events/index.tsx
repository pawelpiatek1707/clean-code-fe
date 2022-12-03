import { Typography } from 'antd';
import Table from 'antd/es/table';
import { useState } from 'react';
import { AddItemButton, PageHeader, Spacer } from '../common';
import { AddEventModal } from './components/AddEvent';
import { Container } from './Events.styles';
import { data, columns } from './mocks/eventsMock';

const { Title } = Typography;

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Container>
      <PageHeader>Wydarzenia</PageHeader>
      <AddItemButton text="Utwórz wydarzenie" onClick={handleModalOpen}/>
      <Spacer height={36} />
      {!data || data.length === 0 ? (
        <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
      ) : (
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      )}
      <AddEventModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
    </Container>
  );
};

export default Events;
