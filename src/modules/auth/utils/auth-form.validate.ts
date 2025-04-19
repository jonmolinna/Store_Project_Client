import { AuthForms } from "../interface/auth.interface";

export const validateAuth = (form: AuthForms) => {
  const errors: Partial<Record<keyof AuthForms, string>> = {};

  if (!form.username) errors.username = "Username es requerido";
  if (!form.password) errors.password = "Contraseña es requerido";

  return errors;
};
