import { Header } from './PageHeader.styles';

interface Props {
  children: string;
}

export const PageHeader = ({ children }: Props) => {
  return <Header>{children}</Header>;
};
