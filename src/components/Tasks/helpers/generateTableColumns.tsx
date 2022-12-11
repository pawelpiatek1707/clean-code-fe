import { Space } from "antd";
import { ColumnsType } from "antd/es/table"
import { DeleteButton, EditButton } from "@/components/common";
import { TableTask } from "../types"

export const generateTableColumns = (onDelete?: (id: number) => void, onEdit?: (id: number) => void) => {
  const columns: ColumnsType<TableTask> = [
    { title: 'Tytuł', dataIndex: 'title' },
    { title: 'Opis', dataIndex: 'description' },
    { title: 'Status', dataIndex: 'isChecked' },
    {
      title: '',
      key: 'action',
      render: (_: any, record: TableTask) => {
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