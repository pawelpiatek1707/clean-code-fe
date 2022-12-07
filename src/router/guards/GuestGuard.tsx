import { Navigate } from "react-router-dom";
import { getToken } from "@/api/helpers";
import {ROUTING_PATHS} from '@/enums'

interface Props {
  children: React.ReactNode;
}

export const GuestGuard = ({ children }: Props) => {
  const token = getToken()
  if(token) {
    return  <Navigate to={`/${ROUTING_PATHS.USERS}`} replace/>
  }
  return <>{children}</>;
};
