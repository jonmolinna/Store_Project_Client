import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { apiPrivate } from "../../../settings/axios.";
import useRefreshToken from "./useRefreshToken";

// AXIOS PRIVATE AND AUTH REFRESH TOKEN INTERCEPTOR
const useAxiosPrivate = () => {
  const refreshToken = useRefreshToken();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const requestInterceptor = apiPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = apiPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;

          const newAccessToken = await refreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      apiPrivate.interceptors.request.eject(requestInterceptor);
      apiPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refreshToken]);

  return apiPrivate;
};

export default useAxiosPrivate;
