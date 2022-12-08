import { Space } from "antd";
import { ColumnsType } from "antd/es/table"
import { DeleteButton, EditButton } from "@/components/common";
import { TableUser } from "../types"

export const generateTableCloumns = (onDelete?: (id: number) => void, onEdit?: (id: number) => void) => {
    const columns: ColumnsType<TableUser> = [
      { title: 'Imię', dataIndex: 'name' },
      { title: 'Nazwisko', dataIndex: 'surname' },
      { title: 'Email', dataIndex: 'email' },
      { title: 'O mnie', dataIndex: 'aboutMe' },
      { title: 'Miasto', dataIndex: 'city' },
      { title: 'Kraj', dataIndex: 'country' },
      { title: 'Uniwersytet', dataIndex: 'university' },
      {
        title: '',
        key: 'action',
        render: (_: any, record: TableUser) => {
          const userId = Number(record.key)
          const handleDelete = () => {
            if(onDelete) {
              onDelete(userId)
            }
          }
          const handleEdit = () => {
            if(onEdit) {
              onEdit(userId)
            }
          }
          return (
            <Space size="middle">
              <DeleteButton onClick={handleDelete} />
              <EditButton onClick={handleEdit}/>
            </Space>
          )
        }
      }
    ];

    return columns
  }
