import { Spacer } from '@/components/common';
import { EMAIL_REGEX } from '@/consts';
import { Modal, Form, Input } from 'antd';
import { Rule } from 'antd/es/form';

interface Props {
  isOpen: boolean;
  handleFormSubmit?: () => void;
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

const aboutRules: Rule[] = [
  { required: true, message: 'Opis jest wymagany' },
  { max: 150, message: 'Opis jest zbyt długi' }
];

const cityRules: Rule[] = [
  { required: true, message: 'Miasto jest wymagane' },
  { max: 60, message: 'Nazwa miasta jest zbyt długa' }
];

const countryRules: Rule[] = [
  { required: true, message: 'Kraj jest wymagany' },
  { max: 60, message: 'Nazwa kraju jest zbyt długa' }
];

export const AddUserModal = ({ isOpen, handleFormSubmit, handleModalClose }: Props) => {
  return (
    <Modal
      title="Dodaj użytkownika"
      open={isOpen}
      onOk={handleFormSubmit}
      onCancel={handleModalClose}
      cancelText="Anuluj"
      okText="Dodaj"
    >
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
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
        <Form.Item label="O mnie" name="about" rules={aboutRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Miasto" name="city" rules={cityRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Kraj" name="country" rules={[]}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Uniwersytet" name="university" rules={countryRules}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
