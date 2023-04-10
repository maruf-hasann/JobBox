import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import './index.css'

import Statistics from './Components/Statistics/Statistics';
import Jobs from './Components/Jobs/Jobs';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import CardInfo from './CardInfo/CardInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/Jobs.json')
      },
      {
        path: "/statistics",
        element:<Statistics/>
      },
      {
        path: '/jobs',
        element:<Jobs/>
      }, {
        path: '/blogs',
        element: <Blogs/>
      }, {
        path: '/card/:jobId',
        element: <CardInfo />,
        loader: ({params}) => fetch("/Jobs.json")
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
