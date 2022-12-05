import { Spin } from 'antd';
import {Container} from './SuspenseFallback.styles'

export const SuspenseFallback = () => {
  return(
    <Container>
      <Spin size='large'/>
    </Container>
  )
};
