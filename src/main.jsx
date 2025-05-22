import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navigation.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Product from './components/Product.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './SignUp.jsx';
import Cart from './Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/product",
        element : <Product />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/signup",
        element : <Signup />
      }, 
      {
        path : "/cart",
        element : <Cart />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
