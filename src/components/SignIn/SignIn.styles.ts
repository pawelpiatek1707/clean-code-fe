import styled from 'styled-components';
import { Typography } from 'antd';
import backgroundImage from '@/assets/images/signInImage.webp';
import { colors } from '@/theme/colors';

const { Title } = Typography;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  width: 40%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100vh;
  position: relative;
`;

export const FormContainer = styled.div`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.grayPrimary};
  padding: 48px 32px;
  border-radius: 10px;
`;

export const Header = styled(Title)`
  margin-bottom: 48px !important;
  text-align: center;
`;
