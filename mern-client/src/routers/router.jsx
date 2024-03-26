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
            path:"/components",
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
  ]);
  
  export default router;                                    