import { SpacerContainer } from './Spacer.styles';

interface Props {
  height?: number;
}

export const Spacer = ({ height }: Props) => {
  return <SpacerContainer height={height} />;
};
