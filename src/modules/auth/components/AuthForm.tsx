import { useDispatch, useSelector } from "react-redux";
import Button from "../../core/components/Button";
import Input from "../../core/components/Input";
import { useForm } from "../../core/hooks/useForm";
import { fetchAuthentication } from "../features/auth/authApi";
import { AppDispatch, RootState } from "../../../store";
import { AuthForms } from "../interface/auth.interface";
import { validateAuth } from "../utils/auth-form.validate";

const initialForm: AuthForms = { username: "", password: "" };

const AuthForm = () => {
  const { form, handleChange, handleBlur, handleSubmit, errors } =
    useForm<AuthForms>(initialForm, validateAuth);
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form
      onSubmit={handleSubmit((data: any) =>
        dispatch(fetchAuthentication(data))
      )}
      className="flex flex-col gap-4"
    >
      <Input
        name="username"
        value={form.username}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Usuario"
        label="Usuario"
        error={errors.username}
      />
      <Input
        name="password"
        value={form.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="********"
        label="Contraseña"
        error={errors.password}
      />
      <Button type="submit" loading={loading} name="Iniciar Sesión" />
    </form>
  );
};

export default AuthForm;
