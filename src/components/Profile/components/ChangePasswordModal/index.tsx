import { Button, Form, Input, Modal } from "antd"
import { Spacer } from "@/components/common"
import { passwordInputRules } from '../../schema'
import { ChangePasswordFormValues } from "../../types"

interface Props {
    isOpen: boolean
    handleModalClose?: () => void
    handleFormSubmit?: (values: ChangePasswordFormValues) => void
}

export const ChangePasswordModal = ({ isOpen, handleModalClose, handleFormSubmit }: Props) => {
    const [form] = Form.useForm()

    const submitForm = async (values: ChangePasswordFormValues) => {
        if (handleFormSubmit) {
            await handleFormSubmit(values)
            form.resetFields()
        }
    }
    return (
        <Modal
            title="Zmień hasło"
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
                <Form.Item label="Hasło" name="password" rules={passwordInputRules}>
                    <Input type="password" />
                </Form.Item>
                <Spacer />
                <Form.Item label="Powtórz hasło" name="confirmPassword" rules={passwordInputRules}>
                    <Input type="password" />
                </Form.Item>
                <Spacer />
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Zmień
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}