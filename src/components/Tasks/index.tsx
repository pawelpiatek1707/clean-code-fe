import { useState, useEffect } from 'react';
import { Modal, Typography } from 'antd';
import Table from 'antd/es/table';
import axios from '@/api/axios';
import { COMPLETE_TASK, CREATE_TASK, DELETE_TASK, EDIT_TASK, TASKS_LIST } from '@/api/endpoints/tasks';
import { Task, TasksListResponse } from '@/api/types/tasks/tasksList';
import { CreateTaskRequest, CreateTaskResponse } from '@/api/types/tasks/createTask';
import { DeleteTaskResponse } from '@/api/types/tasks/deleteTask';
import { CompleteTaskResponse } from '@/api/types/tasks/completeTask';
import { EditTaskRequest, EditTaskResponse } from '@/api/types/tasks/editTask';
import { AddItemButton, ContentLoader, PageHeader, Spacer } from '../common';
import { Container, LoaderContainer } from './Task.styles';
import { AddTaskModal } from './components/AddTaskModal';
import { generateTableColumns, returnSelectedTaskData, transformTasksList } from './helpers';
import { TaskFormValues } from './types';
import { DeleteTaskModal } from './components/DeleteTaskModal';
import { EditTaskModal } from './components/EditTaskModal';
import { TASK_STATUS_NUMBER } from './enums';

const { Title } = Typography;

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false)
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false)
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

  const editTask = async ({ title, description }: TaskFormValues) => {
    if (!selectedTask) {
      return
    }
    setLoading(true)
    try {
      const body: EditTaskRequest = {
        Title: title,
        Description: description
      }
      await axios.post<EditTaskResponse>(`${EDIT_TASK}/${selectedTask}`, body)
      fetchTasks()
      handleEditTaskModalClose()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się edytować zadania'
      })
    } finally {
      setLoading(false)
    }
  }

  const completeTask = async (taskId: number) => {
    const taskToComplete = returnSelectedTaskData(tasks, taskId)
    if (!taskToComplete || taskToComplete.isCheck === TASK_STATUS_NUMBER.COMPLETED) {
      return
    }
    setLoading(true)
    try {
      await axios.get<CompleteTaskResponse>(`${COMPLETE_TASK}/${taskId}`)
      fetchTasks()
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się zakończyć zadania'
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

  const handleEditTaskModalOpen = (taskId: number) => {
    setSelectedTask(taskId)
    setIsEditTaskModalOpen(true)
  }

  const handleEditTaskModalClose = () => {
    setSelectedTask(undefined)
    setIsEditTaskModalOpen(false)
  }

  const transformedTasksList = transformTasksList(tasks)

  const columns = generateTableColumns(handleDeleteTaskModalOpen, handleEditTaskModalOpen, completeTask)

  const selectedTaskData = returnSelectedTaskData(tasks, selectedTask)

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
      <EditTaskModal isOpen={isEditTaskModalOpen} handleModalClose={handleEditTaskModalClose} selectedTask={selectedTaskData} handleFormSubmit={editTask} />
    </Container>
  );
};

export default Tasks;
