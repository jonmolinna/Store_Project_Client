import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { apiPrivate } from "../../../settings/axios.";

const useAxiosPrivate = () => {
  const { token } = useSelector((state: RootState) => state.auth);


  useEffect(() => {
    const requetInterceptor = apiPrivate.interceptors.request.use(
      (config) => {
        if (token && config.headers) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
      },
      
      (error) => Promise.reject(error)
    )

    // LIMPIIZA: QUITAL EL INTERCEPTOR
    return () => {
      apiPrivate.interceptors.request.eject(requetInterceptor);
    }

  }, [token])
   
};

export default useAxiosPrivate;
