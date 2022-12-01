interface Props {
  children: React.ReactNode;
}

// TODO: add logic
export const AuthGuard = ({ children }: Props) => {
  return <>{children}</>;
};
