import { InputComponent } from './components/InputComponent'
import { Container, ContainerLeft, ContainerRight, Header, Form } from './SignIn.styles'

export const SignIn = () => {
    return (
        <Container>
            <ContainerLeft />
            <ContainerRight>
                <Header>
                    Zaloguj sie
                    <Form>
                        <InputComponent label='E-mail' placeholder='Wpisz swój e-mail'/>
                    </Form>
                </Header>
            </ContainerRight>
        </Container>
    )
}