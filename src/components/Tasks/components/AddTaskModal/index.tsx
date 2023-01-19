import { Button, Form, Input, Modal } from 'antd';
import { Spacer } from '@/components/common';
import { TaskFormValues } from '../../types';
import { descriptionRules, titleRules } from '../../schema';

interface Props {
  isOpen: boolean;
  handleFormSubmit?: (values: TaskFormValues) => void;
  handleModalClose?: () => void;
}

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
        form={form}
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
