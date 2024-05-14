import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots"
import AddBooks from "../Layouts/compoments/AddBooks";
import Profile from "../Layouts/compoments/Profile";
import ErrorPage from "../ErrorPage";
import Home from "../Layouts/compoments/Home";
import Login from "../Layouts/compoments/Login";
import Register from "../Layouts/compoments/Register";
import PrivateRoute from "./PrivateRoute";
import CategoriesBusiness from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesBusiness"
import CategoriesBiography from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesBiography"
import CategoriesComics from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesComics";
import CategoriesScience_and_Math from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesScience_and_Math";
import CategoriesHistory from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesHistory";
import CategoriesMystries from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesMystries";
import CategoriesLiterature_and_Fiction from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesLiterature_and_Fiction";
import CategoriesHealth_and_Fitness from "../Layouts/compoments/BooksListAccordingToCategory/CategoriesHealth_and_Fitness";
import AllBooks from "../Layouts/compoments/AllBooks";
import BookDetails from "../Layouts/compoments/BookDetails";

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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/add_books",
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path: "/categories/Business",
                element: <PrivateRoute><CategoriesBusiness></CategoriesBusiness></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Biography",
                element: <PrivateRoute><CategoriesBiography></CategoriesBiography></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Comics",
                element: <PrivateRoute><CategoriesComics></CategoriesComics></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Science_and_Math",
                element: <PrivateRoute><CategoriesScience_and_Math></CategoriesScience_and_Math></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/History",
                element: <PrivateRoute><CategoriesHistory></CategoriesHistory></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Mystries",
                element: <PrivateRoute><CategoriesMystries></CategoriesMystries></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Literature_and_Fiction",
                element: <PrivateRoute><CategoriesLiterature_and_Fiction></CategoriesLiterature_and_Fiction></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/categories/Health_and_Fitness",
                element: <PrivateRoute><CategoriesHealth_and_Fitness></CategoriesHealth_and_Fitness></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/all_books",
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
                loader: () => fetch("https://library-management-server-pink.vercel.app/addBook")
            },
            {
                path: "/addBook/:id",
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-server-pink.vercel.app/addBook/${params.id}`)
            },
        ]
    },
]);

export default router;