import { useState } from 'react';
import { Typography } from 'antd';
import Table from 'antd/es/table';
import { AddItemButton, PageHeader, Spacer } from '../common';
import { Container } from './Task.styles';
import { data, columns } from './mocks/tasksMock';
import { AddTaskModal } from './components/AddTaskModal';

const { Title } = Typography;

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);
  return (
    <Container>
      <PageHeader>Zadania</PageHeader>
      <AddItemButton text="Utwórz zadanie" onClick={handleModalOpen} />
      <Spacer height={36} />
      {!data || data.length === 0 ? (
        <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
      ) : (
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      )}
      <AddTaskModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
    </Container>
  );
};

export default Tasks;
