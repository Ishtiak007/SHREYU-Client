import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
    // {
    //     path: 'dashboard',
    //     element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    //     children: [
    //         // e gulo normal user routes
    //         {
    //             path: 'cart',
    //             element: <Cart></Cart>
    //         },
    //         {
    //             path: 'payment',
    //             element: <Payment></Payment>
    //         },
    //         {
    //             path: 'paymentHistory',
    //             element: <PaymentHistory></PaymentHistory>
    //         },

    //         // addmin onlyyyyyy routes
    //         {
    //             path: 'adminHome',
    //             element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //         },
    //         {
    //             path: 'addItems',
    //             element: <AdminRoute><AddItems></AddItems></AdminRoute>
    //         },
    //         {
    //             path: 'manageItems',
    //             element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    //         },
    //         {
    //             path: 'updateItem/:id',
    //             element: <AdminRoute><ItemUpdate></ItemUpdate></AdminRoute>,
    //             loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
    //         },
    //         {
    //             path: 'users',
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         }
    //     ]
    // }
]);