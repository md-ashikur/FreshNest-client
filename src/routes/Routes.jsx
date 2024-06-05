import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import NotFound from "../Pages/notFound/NotFound";
import Signup from "../Pages/signup/Signup";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AllProducts from "../partials/dashboard/allProducts/AllProducts";
import DashboardLayout from "../Layouts/DashboardLayout";
import UpdateProduct from "../partials/dashboard/updateProduct/UpdateProduct";
import AddProduct from "../partials/dashboard/addProduct/AddProduct";
import About from "../Pages/about/About";
import Shop from "../Pages/shop/Shop";
import Blog from "../Pages/blog/Blog";
import Contact from "../Pages/contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://freshnest-server.vercel.app/foods"),
        },
        {
          path: "/about",
          element: <About />,
          
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: () => fetch("https://freshnest-server.vercel.app/foods"),
        },
        {
          path: "/blog",
          element: <Blog />,
          // loader: () => fetch("https://freshnest-server.vercel.app/blog"),
        },
        {
          path: "/contact",
          element: <Contact />,
         
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
  
        {
          path: "dashboard",
          element: (
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          ),
          errorElement: <NotFound />,
          children: [
            {
              path: "all-products",
              element: (
                <PrivateRoute>
                  <AllProducts />
                </PrivateRoute>
              ),
            },
            {
              path: "all/update/:id",
              element: (
                <PrivateRoute>
                  <UpdateProduct />
                </PrivateRoute>
              ),
              loader: ({ params }) =>
                fetch(`https://freshnest-server.vercel.app/foods/${params.id}`),
            },
            {
              path: "create",
              element: (
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);