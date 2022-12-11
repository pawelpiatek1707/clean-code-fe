import { Button } from "./CheckButton.styles"

interface Props {
    isChecked?: boolean
    disabled?: boolean
    onClick?: () => void
}

export const CheckButton = ({ onClick, disabled, isChecked }: Props) => {

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <Button onClick={handleClick} isChecked={isChecked} disabled={disabled} />
    )
}