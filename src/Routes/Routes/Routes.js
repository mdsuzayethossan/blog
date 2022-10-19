import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error-page";
import Main from "../../Layouts/Main";
import Category from "../../Layouts/pages/Category/Category";
import Home from "../../Layouts/pages/Home/Home";
import News from "../../Layouts/pages/News/News";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
