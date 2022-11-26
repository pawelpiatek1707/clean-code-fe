import { InputComponent } from './components/InputComponent'
import { INPUT_TYPE } from "../../enums"
import { Container, ContainerLeft, ContainerRight, Header, Form, PasswordInputContainer, ButtonContainer } from './SignIn.styles'
import { ButtonPrimary } from '../common'

export const SignIn = () => {
    return (
        <Container>
            <ContainerLeft />
            <ContainerRight>
                <Header>
                    Zaloguj sie
                    <Form>
                        <InputComponent label='E-mail' placeholder='Wpisz swój e-mail' type={INPUT_TYPE.EMAIL} />
                        <PasswordInputContainer>
                            <InputComponent label='Hasło' placeholder='Wpisz swoje hasło' type={INPUT_TYPE.PASSWORD} />
                        </PasswordInputContainer>
                        <ButtonContainer>
                            <ButtonPrimary text="Zaloguj" />
                        </ButtonContainer>
                    </Form>
                </Header>
            </ContainerRight>
        </Container>
    )
}