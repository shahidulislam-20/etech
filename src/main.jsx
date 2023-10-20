import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AuthProvider from './components/AuthProvider/AuthProvider';
import AddProduct from './components/AddProduct/AddProduct';
import MainRoute from './MainRoute';
import ProductAd from './components/ProductAd/ProductAd';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MyCart from './components/MyCart/MyCart';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/product-ad/:brand",
        element: <ProductAd></ProductAd>,
        loader: ({params}) => fetch(`https://etech-server-f0bwcw1a9-ishahidul018-gmailcom.vercel.app/products/${params.brand}`)
      },
      {
        path: "/product-details/product/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://etech-server-f0bwcw1a9-ishahidul018-gmailcom.vercel.app/products/product/${params.id}`)
      },
      {
        path: 'my-cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://etech-server-f0bwcw1a9-ishahidul018-gmailcom.vercel.app/addtocart')
      },
      {
        path: '/update-product/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://etech-server-f0bwcw1a9-ishahidul018-gmailcom.vercel.app/products/product/${params.id}`)
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
