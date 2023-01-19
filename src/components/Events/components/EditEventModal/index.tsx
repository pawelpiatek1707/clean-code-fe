import { Button, DatePicker, Form, Input, Modal } from "antd"
import type { Dayjs } from 'dayjs';
import { useState } from 'react'
import { Spacer } from "@/components/common"
import { descriptionRules, titleRules } from "../../schema";
import { EventFormValues } from "../../types";
import { DateContainer } from "./EditEventModal.styles";
import { Event } from "@/api/types/event/eventsList"

const { RangePicker } = DatePicker;

interface Props {
    isOpen: boolean
    selectedEvent?: Event
    handleModalClose?: () => void
    handleFormSubmit?: (values: EventFormValues) => void
}

export const EditEventModal = ({ isOpen, handleModalClose, handleFormSubmit, selectedEvent }: Props) => {
    const [form] = Form.useForm()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [startDateForm, setStartDateForm] = useState<Dayjs | null>(null)
    const [endDateForm, setEndDateForm] = useState<Dayjs | null>(null)

    const submitForm = ({ title, description }: EventFormValues) => {
        const newValues: EventFormValues = {
            title,
            description,
            startDate: startDate,
            endDate: endDate
        }
        if (handleFormSubmit) {
            handleFormSubmit(newValues)
            form.resetFields()
            setStartDateForm(null)
            setEndDateForm(null)
        }
    }

    const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
        if (!dates) {
            return
        }
        setStartDateForm(dates[0])
        setEndDateForm(dates[1])
        setStartDate(dateStrings[0])
        setEndDate(dateStrings[1])

    };
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
                <RangePicker onChange={onRangeChange} allowClear value={[startDateForm, endDateForm]} placeholder={["Data rozpoczęcia", "Data zakończenia"]}/>
                    {/* <DatePickerContainer>
                        <DatePicker placeholder="Data rozpoczęcia" name="startDate" onChange={(date) => handleStartDateChange(date)} />
                    </DatePickerContainer>
                    <DatePicker placeholder="Data zakończenia" name="endDate" onChange={(date) => handleEndDateChange(date)} /> */}
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