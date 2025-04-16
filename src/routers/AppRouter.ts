import { createBrowserRouter } from "react-router";
import Auth from "../modules/auth/Auth";
import App from "../App";
import Dashboard from "../modules/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/login",
        Component: Auth
    },
    {
        path: "/dashboard",
        Component: App,
        children: [
            {
                index: true, Component: Dashboard
            }
        ]
    }
])

export default router