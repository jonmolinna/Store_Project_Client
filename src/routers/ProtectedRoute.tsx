import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuthenticated =  getAuthorization(token);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    }

  }, [isAuthenticated, navigate])


  if (!isAuthenticated) {
    return null
  }

  return <Outlet />
};

const  getAuthorization = (token: string): boolean => {
  if (token) {
   return !isTokenExpired(token);
  }

  return false;
};

const isTokenExpired = (token: string): boolean => {
  try {
    const payloadBase64 = token.split('.')[1]
    const payload = JSON.parse(atob(payloadBase64));
    const exp = payload.exp;

    if (!exp) return true
    const now = Math.floor(Date.now() / 1000) // segundo
    return exp < now;
    
  } catch (error) {
    return true
  }
}
