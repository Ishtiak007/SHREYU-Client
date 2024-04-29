import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AdvancedTables from "../Pages/AdvancedTables/AdvancedTables";
import BasicElements from "../Pages/Forms/BasicElements/BasicElements";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'advancedTables',
                element: <AdvancedTables></AdvancedTables>
            },
            {
                path: 'basicElement',
                element: <BasicElements></BasicElements>
            }
        ]
    }
]);