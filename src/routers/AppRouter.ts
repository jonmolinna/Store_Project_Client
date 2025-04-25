import { createBrowserRouter } from "react-router";
import Auth from "../modules/auth/Auth";
import App from "../App";
import Dashboard from "../modules/dashboard/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import PersistToken from "./PersistToken";
import Users from "../modules/user/pages/Users";
import Profile from "../modules/user/pages/Profile";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Auth,
  },
  {
    Component: PersistToken,
    children: [
      {
        Component: ProtectedRoute,
        children: [
          {
            path: "",
            Component: App,
            children: [
              {
                index: true,
                Component: Dashboard,
              },
              {
                path: "users",
                children: [
                  {
                    path: "all",
                    Component: Users,
                  },
                  {
                    path: "profile",
                    Component: Profile,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
