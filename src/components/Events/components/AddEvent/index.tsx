import { Form, Input, Modal, DatePicker, Button } from "antd";
import { useState } from 'react'
import type { Dayjs } from 'dayjs';
import { Spacer } from "@/components/common";
import { DateContainer } from "./AddEventModal.styles";
import { descriptionRules, titleRules } from "../../schema";
import { EventFormValues } from "../../types/EventFormValues";


const { RangePicker } = DatePicker;

interface Props {
    isOpen: boolean;
    handleFormSubmit?: (values: EventFormValues) => void;
    handleModalClose?: () => void;
}

export const AddEventModal = ({ isOpen, handleModalClose, handleFormSubmit }: Props) => {
    const [form] = Form.useForm()
    const [startDateForm, setStartDateForm] = useState<Dayjs | null>(null)
    const [endDateForm, setEndDateForm] = useState<Dayjs | null>(null)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const submitForm = ({ title, description }: EventFormValues) => {

        const newValues: EventFormValues = {
            title,
            description,
            startDate,
            endDate
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
                    <RangePicker onChange={onRangeChange} allowClear value={[startDateForm, endDateForm]} placeholder={["Data rozpoczęcia", "Data zakończenia"]}/>
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