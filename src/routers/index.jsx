import { createBrowserRouter } from "react-router";
import Home from "./../pages/site/home";
import Layout from "./../layout/site/index";
import About from "./../pages/site/about";
import Azabrau from "./../pages/site/azabrau";
import Contact from './../pages/site/contact';
import DetailedNews from './../pages/site/detailednews';
import News from './../pages/site/news';
import SalesPoints from './../pages/site/salespoints';
import NotFound from './../pages/404';
import AdminLayout from './../layout/admin/index';

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "azabrau",
        element: <Azabrau />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"detailednews/:id",
        element:<DetailedNews/>
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"salespoints",
        element:<SalesPoints/>
      }
    ]
  },
  {
    path:"/adminpanel",
    element:<AdminLayout/>,
    children:[
        {
            index: true,
            element:<h1>Dashboard</h1>
        }
    ]
  },
  {
    path:"*",
    element:<NotFound/>

  }
]);
