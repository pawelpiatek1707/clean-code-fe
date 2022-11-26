import {Button} from "./ButtonPrimary.styles"

interface Props {
    text: string
    onClick?: () => void
    disabled?: boolean
}

export const ButtonPrimary = ({ text, onClick, disabled = false }: Props) => {

    const handleButtonClick = () => {
        if (!onClick) {
            return
        }
    }
    return (
        <Button onClick={handleButtonClick} disabled={disabled}>
            {text}
        </Button>
    )
}