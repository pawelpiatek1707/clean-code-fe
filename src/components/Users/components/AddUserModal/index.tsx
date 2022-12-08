import { Modal, Form, Input, Button } from 'antd';
import { Rule } from 'antd/es/form';
import { Spacer } from '@/components/common';
import { EMAIL_REGEX } from '@/consts';
import { CreateUserFormValues } from '../../types';

interface Props {
  isOpen: boolean;
  handleFormSubmit?: (values: CreateUserFormValues) => void;
  handleModalClose?: () => void;
}

const nameRules: Rule[] = [
  { required: true, message: 'Imię jest wymagane' },
  { max: 60, message: 'Imię jest zbyt długie' }
];

const lastNameRules: Rule[] = [
  { required: true, message: 'Nazwisko jest wymagane' },
  { max: 60, message: 'Nazwisko jest zbyt długie' }
];

const emailRules: Rule[] = [
  { required: true, message: 'Adres email jest wymagany' },
  { max: 60, message: 'Adres email jest zbyt długi' },
  { pattern: EMAIL_REGEX, message: 'Niepoprawny adres email' }
];

const passwordRules: Rule[] = [
  { required: true, message: 'hasło jest wymagane' },
  { max: 20, message: 'Hasło jest zbyt długie, max 20 znaków' },
  { min: 8, message: 'Hasło jest zbyt krótkie, min 8 znaków' }
];


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
            Zaloguj się
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
