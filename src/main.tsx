import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './components/Index';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Products from './components/Products';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Index />,
        errorElement: <ErrorPage />
    },
    {
        path:"/index",
        element: <Index />,
        errorElement: <ErrorPage />
    },
    {
        path:"/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path:"/products",
        element: <Products />,
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
