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
            
            path:"/singlebook",
            element:<Singlebook/>

        }
        
      ]
    },
  ]);
  
  export default router;                                    