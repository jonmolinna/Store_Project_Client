import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import api from "../../../settings/axios.";
import { addRefreshToken } from "../features/auth/authSlicer";

const useRefreshToken = () => {
  const dispatch = useDispatch<AppDispatch>();

  const refresh = async () => {
    const response = await api.post("/auth/refresh", {});
    const token = response.data.access_token as string;

    dispatch(addRefreshToken(token));

    return token;
  };

  return refresh;
};

export default useRefreshToken;
