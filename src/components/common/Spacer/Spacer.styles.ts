import styled from 'styled-components';

interface Props {
  height?: number;
}

export const SpacerContainer = styled.div<Props>`
  height: ${({ height = 12 }) => `${height}px`};
`;
