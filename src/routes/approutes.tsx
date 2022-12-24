import DashboardPageLayout from "../pages/dashboard/dashboardpagelayout";
import DefaultPage from "../pages/dashboard/defaultpage";
import HomePage from "../pages/home/homepage";
import { RouteType } from "./config";

import DashboardOutlined from "@mui/icons-material/DashboardOutlined";


const appRoutes : RouteType[] = [
    {
        index: true,
        element : <HomePage />,
        state:"home"
    },
    {
        path:"/dashboard",
        element: <DashboardOutlined />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlined/>,
        },
        child:[
            {
                path:"/dashboard/default",
                element: <DefaultPage />,
                state:"dashboard.default",
                sidebarProps : {
                    displayText: "Default"
                }
            }
        ]
    },
];

export default appRoutes;