import { MdDashboard, MdLogout } from "react-icons/md";
import { FaUsers, FaPaperPlane, FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router";

type Props = {
  openSidebar: boolean;
};

const Sidebar: React.FC<Props> = ({ openSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full duration-300 ease-in-out ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h5 className="text-gray-900 rounded-lg dark:text-white text-center truncate">
          Kendra Contreras
        </h5>
        <ul className="space-y-2 font-medium mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          {routers.map(({ Icon, name, url }, index) => (
            <li key={index}>
              <Link
                to={`/${url}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Icon />
                <span className="ms-3">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

interface MENU {
  url: string;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const routers: Array<MENU> = [
  {
    url: "dashboard",
    name: "Dashboard",
    Icon: MdDashboard,
  },
  {
    url: "dashboard",
    name: "Ventas",
    Icon: FaShoppingCart,
  },
  {
    url: "dashboard",
    name: "Productos",
    Icon: FaPaperPlane,
  },
  {
    url: "dashboard",
    name: "Usuarios",
    Icon: FaUsers,
  },
  {
    url: "login",
    name: "Salir",
    Icon: MdLogout,
  },
];

export default Sidebar;
