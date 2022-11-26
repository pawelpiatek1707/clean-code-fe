import { INPUT_TYPE } from "../../../../enums"
import { ReactComponent as MailIcon } from '../../../../assets/icons/mail.svg';
import { ReactComponent as KeyIcon } from '../../../../assets/icons/key.svg';
import { Container, Label, Input, InputContainer } from "./InputComponent.styles"

interface Props {
    value?: string,
    label?: string
    placeholder?: string
    type?: INPUT_TYPE
}

export const InputComponent = ({ label, placeholder, type = INPUT_TYPE.PASSWORD }: Props) => {
    return (
        <Container>
            {label && <Label>{label}</Label>}
            <InputContainer>
                {type === INPUT_TYPE.EMAIL ? <MailIcon /> : <KeyIcon/>}
                <Input placeholder={placeholder} />
            </InputContainer>
        </Container>
    )
}