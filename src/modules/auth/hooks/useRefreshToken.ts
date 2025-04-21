import { useDispatch } from "react-redux";
import api from "../../../settings/axios.";
import { AppDispatch } from "../../../store";
import { addRefreshToken } from "../features/auth/authSlicer";

const useRefreshToken = () => {
  const dispatch = useDispatch<AppDispatch>();

  const refresh = async () => {
    const response = await api.post("auth/refresh", {});
    dispatch(addRefreshToken(response.data.access_token));

    return response.data.access_token;
  };

  return refresh;
};

export default useRefreshToken;
