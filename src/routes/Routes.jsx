import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/home/Home";
import UserProfile from "../Pages/userProfile/UserProfile";
import Login from "../Pages/login/Login";

import Signup from "../Pages/signup/Signup";

import DashboardLayout from "../Layouts/DashboardLayout";

import About from "../Pages/about/About";
import Shop from "../Pages/shop/Shop";
import Blog from "../Pages/blog/Blog";
import Contact from "../Pages/contact/Contact";
import DashboardBody from "../partials/dashboard/DashboardBody";
import AllProducts from "../partials/dashboard/allProducts/AllProducts";
import AddProduct from "../partials/dashboard/addProduct/AddProduct";
import ProductDetails from "../partials/shop/ProductDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import UpdateProduct from "../partials/dashboard/updateProduct/UpdateProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,

        },
        {
          path: "/about",
          element: <About />,
          
        },
        {
          path: "/shop",
          element: <Shop />,
     
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><ProductDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        },
        {
          path: "/blog",
          element: <Blog />,
    
        },
        {
          path: "/contact",
          element: <Contact />,
         
        },
        {
          path: "/user",
          element: <PrivateRoute><UserProfile/></PrivateRoute>
         
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
  
       
        
      ],
    },
    {
      path: "/admin-dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "dashboard",
          element:(<PrivateRoute><DashboardBody /> </PrivateRoute> ),
          // loader: () => fetch("http://localhost:5000/foods"),
        },
        {
          path: "all-products",
          element: (<PrivateRoute><AllProducts/></PrivateRoute>),
          
        },
        {
          path: "add-product",
          element: (<PrivateRoute><AddProduct/></PrivateRoute>) ,
         
        },

        {
          path: "all-products/edit/:id",
          element: (
            <PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/products/${params.id}`
            ),
        },
       

          ],
        },
   
  ]);