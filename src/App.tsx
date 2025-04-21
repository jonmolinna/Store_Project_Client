import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./modules/core/components/Sidebar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { fetchProfile } from "./modules/auth/features/profile/profileApi";
import useAxiosPrivate from "./modules/auth/hooks/useAxiosPrivate";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const getProfile = async () => {
      dispatch(fetchProfile(axiosPrivate));
    };

    getProfile();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* NAVBAR */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <MdOutlineMenu className="w-6 h-6" />
      </button>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-transparent z-40 sm:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <Sidebar openSidebar={openSidebar} />
      {/* BODY */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-300  rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
