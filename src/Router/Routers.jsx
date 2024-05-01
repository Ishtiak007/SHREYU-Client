import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AdvancedTables from "../Pages/AdvancedTables/AdvancedTables";
import BasicElements from "../Pages/Forms/BasicElements/BasicElements";
import Validation from "../Pages/FormValidation/Validation/Validation";
import AllEmployees from "../Pages/AllEmployees/AllEmployees";
import Holidays from "../Pages/Holidays/Holidays";
import LeavesAdmin from "../Pages/LeavesAdmin/LeavesAdmin";
import LeavesEmployee from "../Pages/LeavesEmployee/LeavesEmployee";
import AdminAttendance from "../Pages/AdminAttendance/AdminAttendance";
import EmployeeAttendance from "../Pages/EmployeeAttendance/EmployeeAttendance";
import WhoCan from "../Pages/Home/WhoCan";
import FAQ from "../Pages/Home/FAQ";
import LeavesSettings from "../Pages/LeavesSettings/LeavesSettings";

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
            },
            {
                path: '/whoUse',
                element: <WhoCan></WhoCan>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
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
            },
            {
                path: 'validation',
                element: <Validation></Validation>
            },
            {
                path: 'allEmployees',
                element: <AllEmployees></AllEmployees>
            },
            {
                path: 'holidays',
                element: <Holidays></Holidays>
            },
            {
                path: 'adminLeaves',
                element: <LeavesAdmin></LeavesAdmin>
            },
            {
                path: 'employeeLeaves',
                element: <LeavesEmployee></LeavesEmployee>
            },
            {
                path: 'adminAttendance',
                element: <AdminAttendance></AdminAttendance>
            },
            {
                path: 'employeeAttendance',
                element: <EmployeeAttendance></EmployeeAttendance>
            },
            {
                path: 'leavesSettings',
                element: <LeavesSettings></LeavesSettings>
            }
        ]
    }
]);