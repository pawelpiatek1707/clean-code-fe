import { Form, Input, Modal, DatePicker } from "antd";
import { Rule } from "antd/es/form";
import { Spacer } from "@/components/common";
import { DateContainer, DatePickerContainer } from "./AddEventModal.styles";

interface Props {
    isOpen: boolean;
    handleFormSubmit?: () => void;
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


export const AddEventModal = ({ isOpen, handleFormSubmit, handleModalClose }: Props) => {
    return (
        <Modal
            title="Utwórz wydarzenie"
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
                <Form.Item label="Tytuł" name="title" rules={titleRules}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Opis" name="description" rules={descriptionRules}>
                    <Input />
                </Form.Item>
                <Spacer />
                <DateContainer >
                    <DatePickerContainer>
                        <DatePicker placeholder="Data rozpoczęcia" />
                    </DatePickerContainer>
                    <DatePicker placeholder="Data zakończenia" />
                </DateContainer>
                <Spacer />
            </Form>
        </Modal>
    )
}