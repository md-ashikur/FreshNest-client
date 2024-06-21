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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
          // loader: () => fetch("http://localhost:5000/foods"),
        },
        {
          path: "/about",
          element: <About />,
          
        },
        {
          path: "/shop",
          element: <Shop />,
          // loader: () => fetch("http://localhost:5000/foods"),
        },
        {
          path: "/blog",
          element: <Blog />,
          // loader: () => fetch("http://localhost:5000/blog"),
        },
        {
          path: "/contact",
          element: <Contact />,
         
        },
        {
          path: "/user",
          element: <UserProfile/>
         
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
          element: <DashboardBody />,
          // loader: () => fetch("http://localhost:5000/foods"),
        },
        {
          path: "all-products",
          element: <AllProducts/>,
          // loader: () => fetch("http://localhost:5000/foods"),
        },
        {
          path: "add-product",
          element: <AddProduct/>,
          // loader: () => fetch("http://localhost:5000/foods"),
        },
       

          ],
        },
   
  ]);