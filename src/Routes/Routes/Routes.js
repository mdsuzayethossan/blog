import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error-page";
import Main from "../../Layouts/Main";
import Category from "../../Layouts/pages/Category/Category";
import Home from "../../Layouts/pages/Home/Home";
import News from "../../Layouts/pages/News/News";
import LogIn from "../../Layouts/pages/LogIn/LogIn";
import Register from "../../Layouts/pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Layouts/pages/TermsAndConditions/TermsAndConditions";
import Profile from "../../Layouts/pages/Profile/Profile";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
