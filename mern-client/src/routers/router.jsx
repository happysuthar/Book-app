import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
import Home from "../home/Home";
import Shop from '../shop/Shop';
import Blog from "../components/Blog";
import About from "../components/About";
import Singlebook from "../components/Singlebook";
import SingleBook from "../shop/SingleBook";
import Dashboard from "../dashboard/Dashboard"
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/about",
            element:<About/>
        },
        
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
        
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/> 
        },
        {
           path:"/admin/dashboard/upload",
           element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
       },
       {
        path:"/admin/dashboard/edit-books/:id",
        element:<EditBook/>,
        loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
      ]
    },
  ]);
  
  export default router;                                    