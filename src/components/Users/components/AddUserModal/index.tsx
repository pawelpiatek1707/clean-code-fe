import { Modal, Form, Input, Button } from 'antd';
import { Spacer } from '@/components/common';
import { CreateUserFormValues } from '../../types';
import { emailRules, lastNameRules, nameRules, passwordRules } from '../../schema';

interface Props {
  isOpen: boolean;
  handleFormSubmit?: (values: CreateUserFormValues) => void;
  handleModalClose?: () => void;
}


export const AddUserModal = ({ isOpen, handleFormSubmit, handleModalClose }: Props) => {
  const [form] = Form.useForm()

  const submitForm = (values: CreateUserFormValues) => {
    if(handleFormSubmit) {
      handleFormSubmit(values)
      form.resetFields()
    }
  }

  return (
    <Modal
      title="Dodaj użytkownika"
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
        <Form.Item label="Imię" name="name" rules={nameRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Nazwisko" name="surname" rules={lastNameRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="E-mail" name="email" rules={emailRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Hasło" name="password" rules={passwordRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Utwórz
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
