import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/home/Home"
import Documentation from "./components/documentation/Documentation";
import LogIn from "./components/login/LogIn";
import Registration from "./components/registration/Registration";
import Blog from "./components/blog/Blog";
import PersonalOffice from "./components/personalOffice/PersonalOffice";

const App = () => {
    const routes = [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/home",
            element: <Home/>
        },
        {
          path: "/documentation",
          element: <Documentation/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/login",
            element: <LogIn/>
        },
        {
            path: "/registration",
            element: <Registration/>
        },
        {
            path: "/personaloffice",
            element: <PersonalOffice/>
        },
        {
            path: "/*",
            element: <div>404..</div>
        }
    ];

    return <RouterProvider router = {createBrowserRouter(routes)}/>;
}

export default App;
