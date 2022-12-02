import { Button, Form, Input } from 'antd';
import { Rule } from 'antd/es/form';
import { useNavigate } from 'react-router-dom';
import { ROUTING_PATHS } from '@/enums';
import { EMAIL_REGEX } from '@/consts';
import { Spacer } from '../common';
import { Container, ContainerLeft, ContainerRight, FormContainer, Header } from './SignIn.styles';

const emailInputRules: Rule[] = [
  { required: true, message: 'Adres email jest wymagany' },
  { pattern: EMAIL_REGEX, message: 'Niepoprawny adres email' },
  { max: 60, message: 'Zbyt długi adres email' }
];
const passwordInputRules: Rule[] = [
  { required: true, message: 'Hasło jest wymagane' },
  { min: 8, message: 'Minimum 8 znaków' },
  { max: 40, message: 'Hasło zbyt długie, maksimum 40 znaków' }
];

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate(`/${ROUTING_PATHS.USERS}`);
  };

  const onFinishFailed = () => {
    return;
  };

  return (
    <Container>
      <ContainerLeft />
      <ContainerRight>
        <FormContainer>
          <Header>Zaloguj się </Header>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="E-mail" name="email" rules={emailInputRules}>
              <Input />
            </Form.Item>
            <Spacer />
            <Form.Item label="Hasło" name="password" rules={passwordInputRules}>
              <Input.Password />
            </Form.Item>
            <Spacer />
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Zaloguj się
              </Button>
            </Form.Item>
          </Form>
        </FormContainer>
      </ContainerRight>
    </Container>
  );
};

export default SignIn;
