import { Button, Form, Input, Modal } from "antd"
import { Spacer } from "@/components/common"
import { User } from "@/api/types/user/usersList"
import { nameRules, lastNameRules, aboutMeRules, cityRules, countryRules, universityRules } from '../../schema'
import { EditUserFormValues } from "../../types"

interface Props {
    isOpen: boolean
    selectedUser?: User
    handleModalClose?: () => void
    handleFormSubmit?: (values: EditUserFormValues) => void
}

export const EditUserModal = ({ isOpen, handleModalClose, handleFormSubmit, selectedUser }: Props) => {
    const [form] = Form.useForm()

    const submitForm = (values: EditUserFormValues) => {
        if (handleFormSubmit) {
            handleFormSubmit(values)
            form.resetFields()
        }
    }
    return (
        <Modal
            title="Edytuj użytkownika"
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
                <Form.Item label="Imię" name="name" rules={nameRules} initialValue={selectedUser?.name}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Nazwisko" name="surname" rules={lastNameRules} initialValue={selectedUser?.surname}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="O mnie" name="about" rules={aboutMeRules} initialValue={selectedUser?.aboutMe}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Miasto" name="city" rules={cityRules} initialValue={selectedUser?.city}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Kraj" name="country" rules={countryRules} initialValue={selectedUser?.country}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Uniwersytet" name="university" rules={universityRules} initialValue={selectedUser?.university}>
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