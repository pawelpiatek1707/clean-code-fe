import { DeleteButton, EditButton } from "@/components/common";
import { Space } from "antd";
import { ColumnsType } from "antd/es/table"
import { TableEvent } from "../types"

export const generateTableColumns = (onDelete?: (id: number) => void, onEdit?: (id: number) => void) => {
  const columns: ColumnsType<TableEvent> = [
    { title: 'Tytuł', dataIndex: 'title' },
    { title: 'Opis', dataIndex: 'description' },
    { title: 'Data rozpoczęcia', dataIndex: 'startDate' },
    { title: 'Data zakończenia', dataIndex: 'endDate' },
    {
      title: '',
      key: 'action',
      render: (_: any, record: TableEvent) => {
        const userId = Number(record.key)
        const handleDelete = () => {
          if (onDelete) {
            onDelete(userId)
          }
        }
        const handleEdit = () => {
          if (onEdit) {
            onEdit(userId)
          }
        }
        return (
          <Space size="middle">
            <DeleteButton onClick={handleDelete} />
            <EditButton onClick={handleEdit} />
          </Space>
        )

      }
    }
  ];

  return columns
}