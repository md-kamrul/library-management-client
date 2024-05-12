import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots"
import AddBooks from "../Layouts/compoments/AddBooks";
import Profile from "../Layouts/compoments/Profile";
import ErrorPage from "../ErrorPage";
import Home from "../Layouts/compoments/Home";
import Login from "../Layouts/compoments/Login";
import Register from "../Layouts/compoments/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/add_books",
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            }
        ]
    },
]);

export default router;