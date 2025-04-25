import Select from "../../core/components/Select";

const Users = () => {
  return (
    <article>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
        <h1 className="text-2xl text-gray-900 dark:text-white">Usuarios</h1>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Crear un nuevo usuario
        </button>
      </div>
      <div className="mt-10">
        <Select name="roles" />
      </div>
    </article>
  );
};

export default Users;
