import { useState, useEffect } from 'react';
import { Modal, Typography } from 'antd';
import Table from 'antd/es/table';
import axios from '@/api/axios';
import { CREATE_TASK, DELETE_TASK, TASKS_LIST } from '@/api/endpoints/tasks';
import { Task, TasksListResponse } from '@/api/types/tasks/tasksList';
import { CreateTaskRequest, CreateTaskResponse } from '@/api/types/tasks/createTask';
import { DeleteTaskResponse } from '@/api/types/tasks/deleteTask';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { Container, LoaderContainer } from './Task.styles';
import { AddTaskModal } from './components/AddTaskModal';
import { generateTableColumns, transformTasksList } from './helpers';
import { TaskFormValues } from './types';
import { DeleteTaskModal } from './components/DeleteTaskModal';

const { Title } = Typography;

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<number>()
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState<Task[]>()

  const fetchTasks = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get<TasksListResponse>(TASKS_LIST)
      setTasks(data)
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się pobrać listy zadań'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const createTask = async ({ title, description }: TaskFormValues) => {
    setLoading(true)
    try {
      const body: CreateTaskRequest = {
        Title: title,
        Description: description
      }
      await axios.post<CreateTaskResponse>(CREATE_TASK, body)
      fetchTasks()
      handleModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się stworzyć nowego zadania'
      })
    } finally {
      setLoading(false)
    }
  }

  const deleteTask = async () => {
    if (!selectedTask) {
      return
    }
    setLoading(true)
    try {
      await axios.get<DeleteTaskResponse>(`${DELETE_TASK}/${selectedTask}`)
      fetchTasks()
      handleDeleteTaskModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się usunąć zadania'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleModalOpen = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const handleDeleteTaskModalOpen = (taskId: number) => {
    setSelectedTask(taskId)
    setIsDeleteTaskModalOpen(true)
  }

  const handleDeleteTaskModalClose = () => {
    setSelectedTask(undefined)
    setIsDeleteTaskModalOpen(false)
  }

  const transformedTasksList = transformTasksList(tasks)

  const columns = generateTableColumns(handleDeleteTaskModalOpen)

  const renderedContent = loading ? (
    <LoaderContainer>
      <ContentLoader />
    </LoaderContainer>
  ) : !transformedTasksList || !transformedTasksList.length ? (
    <Title level={4}>Brak wydarzeń do wyświetlenia :(</Title>
  ) : (
    <Table columns={columns} dataSource={transformedTasksList} size="middle" pagination={false} />
  )
  return (
    <Container>
      <PageHeader>Zadania</PageHeader>
      <AddItemButton text="Utwórz zadanie" onClick={handleModalOpen} />
      <Spacer height={36} />
      {renderedContent}
      <AddTaskModal isOpen={isModalOpen} handleModalClose={handleModalClose} handleFormSubmit={createTask} />
      <DeleteTaskModal isOpen={isDeleteTaskModalOpen} handleModalClose={handleDeleteTaskModalClose} handleModalSubmit={deleteTask} />
    </Container>
  );
};

export default Tasks;
