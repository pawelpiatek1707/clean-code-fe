import { Button, DatePicker, Form, Input, Modal } from "antd"
import dayjs from 'dayjs'
import { useState } from 'react'
import { Spacer } from "@/components/common"
import { descriptionRules, titleRules } from "../../schema";
import { EventFormValues } from "../../types";
import { formatDate } from "../../helpers";
import { DateContainer, DatePickerContainer } from "./EditEventModal.styles";
import { Event } from "@/api/types/event/eventsList"

interface Props {
    isOpen: boolean
    selectedEvent?: Event
    handleModalClose?: () => void
    handleFormSubmit?: (values: EventFormValues) => void
}

export const EditEventModal = ({ isOpen, handleModalClose, handleFormSubmit, selectedEvent }: Props) => {
    const [form] = Form.useForm()
    const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(dayjs())
    const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(dayjs())

    const submitForm = ({ title, description }: EventFormValues) => {
        const newValues: EventFormValues = {
            title,
            description,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate)
        }
        if (handleFormSubmit) {
            handleFormSubmit(newValues)
            form.resetFields()
        }
    }

    const handleStartDateChange = (date: dayjs.Dayjs | null) => {
        setStartDate(date)
    }

    const handleEndDateChange = (date: dayjs.Dayjs | null) => {
        setEndDate(date)
    }
    return (
        <Modal
            title="Edytuj wydarzenie"
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
                <Form.Item label="Tytuł" name="title" rules={titleRules} initialValue={selectedEvent?.title}>
                    <Input />
                </Form.Item>
                <Spacer />
                <Form.Item label="Opis" name="description" rules={descriptionRules} initialValue={selectedEvent?.description}>
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
                        Edytuj
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}