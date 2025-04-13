import Button from '../../core/components/Button'
import Input from '../../core/components/Input'
import { useForm } from '../../core/hooks/useForm'

const AuthForm = () => {
  const {form, handleChange, handleBlur, handleSubmit, errors} = useForm<FORM>(initialForm, validate)

  return (
    <form onSubmit={handleSubmit((data) => console.log("DATA ---> ", data))} className='flex flex-col gap-4'>
        <Input 
            name='username'
            value={form.username}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text' 
            placeholder='Usuario' 
            label='Usuario'
            error={errors.username}
        />
        <Input 
            name='password'
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type='password'
            placeholder='********' 
            label='Contraseña'
            error={errors.password}
        />
        <Button 
          type='submit'
          name='Iniciar Sesión' 
        />
    </form>
  )
}

interface FORM {username: string, password: string}
const initialForm: FORM = { username: '', password: '' }

const validate = (form: FORM) => {
  const errors: Partial<Record<keyof FORM, string>> = {};

  if (!form.username) errors.username = "Username es requerido"
  // if (!/\S+@\S+\.\S+/.test(form.username)) errors.username = "Invalid email";
  if (!form.password) errors.password = "Contraseña es requerido"

  return errors
}

export default AuthForm