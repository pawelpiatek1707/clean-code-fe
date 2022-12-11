import { useState } from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTING_PATHS } from '@/enums';
import axios from '@/api/axios';
import { SIGN_IN_ENDPOINT } from '@/api/endpoints/authentication';
import { SignInResponse, SignInReuest } from '@/api/types/authentication/signIn';
import { setToken, setUserId } from '@/api/helpers';
import { Spacer } from '../common';
import { Container, ContainerLeft, ContainerRight, FormContainer, Header } from './SignIn.styles';
import { emailInputRules, passwordInputRules } from './schema';

interface SignInFormValues {
  email: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const onFinish = async ({ email, password }: SignInFormValues) => {

    setLoading(true)
    try {
      const body: SignInReuest = {
        Login: email,
        Password: password
      }
      const { data: { token, userId } } = await axios.post<SignInResponse>(SIGN_IN_ENDPOINT, body)
      setUserId(userId)
      setToken(token)
      form.resetFields()
      navigate(`/${ROUTING_PATHS.USERS}`);
    } catch (e: unknown) {
      Modal.error({
        title: 'Błąd',
        content: 'Nie udało się zalogować do aplikacji'
      })
    } finally {
      setLoading(false)
    }

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
            form={form}
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
              <Button type="primary" htmlType="submit" loading={loading}>
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
