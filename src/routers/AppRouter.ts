import { createBrowserRouter } from "react-router";
import Auth from "../modules/auth/Auth";
import App from "../App";
import Dashboard from "../modules/dashboard/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import PersistToken from "./PersistToken";

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
            path: "/dashboard",
            Component: App,
            children: [
              {
                index: true,
                Component: Dashboard,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
