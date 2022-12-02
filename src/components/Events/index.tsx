import { Typography } from 'antd';
import Table from 'antd/es/table';
import { AddItemButton, PageHeader, Spacer } from '../common';
import { Container } from './Events.styles';
import { data, columns } from './mocks/eventsMock';

const { Title } = Typography;

const Events = () => {
  return (
    <Container>
      <PageHeader>Wydarzenia</PageHeader>
      <AddItemButton text="Utwórz wydarzenie" />
      <Spacer height={36} />
      {!data || data.length === 0 ? (
        <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
      ) : (
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      )}
    </Container>
  );
};

export default Events;
