import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Toast from "../core/components/Toast";
import AuthForm from "./components/AuthForm";
import { RootState } from "../../store";

const Auth = () => {
  const [showToast, setShowToast] = useState(false);
  const { token, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      setShowToast(true);
    }

  }, [error]);

  return (
    <div className="pt-12 px-3">
      <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center mb-7 text-xl font-medium text-gray-900 dark:text-white">
          Inicia sesión
        </h5>
        <AuthForm />
      </div>
      {showToast && error && (
        <Toast message={error.message} onClose={() => setShowToast(false)} type="error" />
      )}
    </div>

  );
};

export default Auth;
