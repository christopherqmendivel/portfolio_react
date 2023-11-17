import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages';
import Contacto from './pages/Contacto';
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },

      {
        path: '/sobre-mi',
        element: <SobreMi />
      },
      {
        path: '/proyectos',
        element: <Proyectos />
      },
      {
        path: '/contacto',
        element: <Contacto />
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
