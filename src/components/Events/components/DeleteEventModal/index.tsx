import { Modal } from "antd"

interface Props {
    isOpen: boolean
    handleModalClose?: () => void
    handleModalSubmit?: () => void
}

export const DeleteEventModal = ({isOpen, handleModalClose, handleModalSubmit}: Props) => {
    return (
        <Modal
        title="Czy na pewno chcesz usunąc wydarzenie"
        open={isOpen}
        onCancel={handleModalClose}
        cancelText="Anuluj"
        okText="Usuń"
        onOk={handleModalSubmit}
      />
    )
}