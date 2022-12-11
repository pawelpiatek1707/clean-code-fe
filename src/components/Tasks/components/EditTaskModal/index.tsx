import { Button, Form, Input, Modal } from "antd"
import { Spacer } from "@/components/common"
import { Task } from "@/api/types/tasks/tasksList"
import { titleRules, descriptionRules } from '../../schema'
import { TaskFormValues } from "../../types"

interface Props {
    isOpen: boolean
    selectedTask?: Task
    handleModalClose?: () => void
    handleFormSubmit?: (values: TaskFormValues) => void
}

export const EditTaskModal = ({ isOpen, handleModalClose, handleFormSubmit, selectedTask }: Props) => {
    const [form] = Form.useForm()

    const submitForm = (values: TaskFormValues) => {
        if (handleFormSubmit) {
            handleFormSubmit(values)
            form.resetFields()
        }
    }
    return (
        <Modal
            title="Edytuj zadanie"
            open={isOpen}
            onCancel={handleModalClose}
            footer={null}
        >
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={submitForm}
                autoComplete="off"
                form={form}
            >
                <Spacer height={24} />
                <Form.Item label="Tytuł" name="title" rules={titleRules} initialValue={selectedTask?.title}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Opis" name="description" rules={descriptionRules} initialValue={selectedTask?.description}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Edytuj
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}