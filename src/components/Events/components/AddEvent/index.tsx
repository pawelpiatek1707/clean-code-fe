import { Form, Input, Modal, DatePicker, Button } from "antd";
import dayjs from 'dayjs'
import { useState } from 'react'
import { Spacer } from "@/components/common";
import { DateContainer, DatePickerContainer } from "./AddEventModal.styles";
import { descriptionRules, titleRules } from "../../schema";
import { AddEventFormValues } from "../../types/AddEventFormValues";
import { formatDate } from "../../helpers";

interface Props {
    isOpen: boolean;
    handleFormSubmit?: (values: AddEventFormValues) => void;
    handleModalClose?: () => void;
}

export const AddEventModal = ({ isOpen, handleModalClose, handleFormSubmit }: Props) => {
    const [form] = Form.useForm()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const submitForm = ({ title, description }: AddEventFormValues) => {

        const newValues: AddEventFormValues = {
            title,
            description,
            startDate,
            endDate
        }
        if (handleFormSubmit) {
            handleFormSubmit(newValues)
            form.resetFields()
        }
    }

    const handleStartDateChange = (date: dayjs.Dayjs | null) => {
        const formatedDate = formatDate(date)
        setStartDate(date ? formatedDate : '')
    }

    const handleEndDateChange = (date: dayjs.Dayjs | null) => {
        const formatedDate = formatDate(date)
        setEndDate(date ? formatedDate : '')
    }

    return (
        <Modal
            title="Utwórz wydarzenie"
            open={isOpen}
            onCancel={handleModalClose}
            footer={null}
        >
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                form={form}
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
                <DateContainer >
                    <DatePickerContainer>
                        <DatePicker placeholder="Data rozpoczęcia" name="startDate" onChange={(date) => handleStartDateChange(date)} />
                    </DatePickerContainer>
                    <DatePicker placeholder="Data zakończenia" name="endDate" onChange={(date) => handleEndDateChange(date)} />
                </DateContainer>
                <Spacer />
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Utwórz
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}