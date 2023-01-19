import { Space } from "antd";
import { ColumnsType } from "antd/es/table"
import { DeleteButton, EditButton } from "@/components/common";
import { TableTask } from "../types"
import { CheckButton } from "../components/CheckButton";

export const generateTableColumns = (onDelete?: (id: number) => void, onEdit?: (id: number) => void, onCheck?: (id: number) => void) => {
  const columns: ColumnsType<TableTask> = [
    { title: 'Tytuł', dataIndex: 'title' },
    { title: 'Opis', dataIndex: 'description' },
    { title: 'Status', dataIndex: 'isChecked' },
    {
      title: '',
      key: 'action',
      render: (_: any, record: TableTask) => {
        const taskId = Number(record.key)
        const taskCompleted = record.isChecked
        const handleDelete = () => {
          if (onDelete) {
            onDelete(taskId)
          }
        }
        const handleEdit = () => {
          if (onEdit) {
            onEdit(taskId)
          }
        }
        const handleCheck = () => {
          if (onCheck) {
            onCheck(taskId)
          }
        }
        return (
          <Space size="middle">
            <DeleteButton onClick={handleDelete} />
            <EditButton onClick={handleEdit} />
            <CheckButton onClick={handleCheck} isChecked={taskCompleted} disabled={taskCompleted} />
          </Space>
        )

      }
    }
  ];

  return columns
}