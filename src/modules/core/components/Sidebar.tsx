import React, { useState } from "react";
import { Link } from "react-router";
import { MdDashboard, MdLogout } from "react-icons/md";
import {
  FaUsers,
  FaPaperPlane,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import { nameLetterUppercase } from "../../../settings/name-letter-uppercase";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

type Props = {
  openSidebar: boolean;
};

const Sidebar: React.FC<Props> = ({ openSidebar }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { profile } = useSelector((state: RootState) => state.profile);

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full duration-300 ease-in-out ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h5 className="text-gray-900 rounded-lg dark:text-white text-center truncate">
          {profile && nameLetterUppercase(profile.name, profile.lastName)}
        </h5>
        <ul className="space-y-2 font-medium mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          {routers.map(({ Icon, name, url, children }, index) =>
            !children ? (
              <li key={index}>
                <Link
                  to={`/${url}`}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">{name}</span>
                </Link>
              </li>
            ) : (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setShowSubMenu(!showSubMenu)}
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <Icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {name}
                  </span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                <ul
                  className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    showSubMenu
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {children.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`${url}/${item.url}`}
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
};

interface MENU {
  url: string;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: Array<{
    url: string;
    name: string;
  }>;
}

const routers: Array<MENU> = [
  {
    url: "",
    name: "Dashboard",
    Icon: MdDashboard,
  },
  {
    url: "",
    name: "Ventas",
    Icon: FaShoppingCart,
  },
  {
    url: "",
    name: "Productos",
    Icon: FaPaperPlane,
  },
  {
    url: "users",
    name: "Usuarios",
    Icon: FaUsers,
    children: [
      {
        name: "Usuarios",
        url: "all",
      },
      {
        name: "Perfil",
        url: "profile",
      },
    ],
  },
  {
    url: "",
    name: "Productos",
    Icon: FaPaperPlane,
  },
];

export default Sidebar;
