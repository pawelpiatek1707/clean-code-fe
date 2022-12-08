import { Modal } from "antd"

interface Props {
    isOpen: boolean
    handleModalClose?: () => void
    handleModalSubmit?: () => void
}

export const DeleteuserModal = ({isOpen, handleModalClose, handleModalSubmit}: Props) => {
    return (
        <Modal
        title="Czy na pewno chcesz usunąc użytkownika"
        open={isOpen}
        onCancel={handleModalClose}
        cancelText="Anuluj"
        okText="Usuń"
        onOk={handleModalSubmit}
      />
    )
}