import AuthForm from "./components/AuthForm"

const Auth = () => {
  return (
    <div className="pt-12">
      <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-center mb-7 text-xl font-medium text-gray-900 dark:text-white">
          Inicia sesión
        </h5>
        <AuthForm />
      </div>
    </div>
  )
}

export default Auth