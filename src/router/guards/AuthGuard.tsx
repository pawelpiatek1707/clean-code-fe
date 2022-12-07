import { Navigate } from "react-router-dom";
import { ROUTING_PATHS } from "@/enums";
import { getToken } from "@/api/helpers";

interface Props {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: Props) => {
  const token = getToken()
  if(!token) {
    return <Navigate to={`/${ROUTING_PATHS.SIGN_IN}`} replace/>
  }
  return <>{children}</>;
};
