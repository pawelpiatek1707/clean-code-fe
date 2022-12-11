import { Button, Form, Input, Modal } from 'antd';
import { Rule } from 'antd/es/form';
import { Spacer } from '@/components/common';
import { TaskFormValues } from '../../types';

interface Props {
  isOpen: boolean;
  handleFormSubmit?: (values: TaskFormValues) => void;
  handleModalClose?: () => void;
}

const titleRules: Rule[] = [
  { required: true, message: 'Tytuł jest wymagane' },
  { max: 60, message: 'Tytuł jest zbyt długie' }
];

const descriptionRules: Rule[] = [
  { required: true, message: 'Opis jest wymagane' },
  { max: 60, message: 'Opis jest zbyt długie' }
];

export const AddTaskModal = ({ isOpen, handleFormSubmit, handleModalClose }: Props) => {
  const [form] = Form.useForm()

  const submitForm = (values: TaskFormValues) => {
    if (handleFormSubmit) {
      handleFormSubmit(values)
      form.resetFields()
    }
  }
  return (
    <Modal
      title="Utwórz zadanie"
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
      >
        <Spacer height={24} />
        <Form.Item label="Tytuł" name="title" rules={titleRules}>
          <Input />
        </Form.Item>
        <Spacer />
        <Form.Item label="Opis" name="description" rules={descriptionRules}>
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
