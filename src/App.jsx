import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Layout from './Layout/Layout';
import ProductDetils from './Pages/ProductDetils';
import Cart from './Pages/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'product', element: <Product /> },
        { path: 'product/:id', element: <ProductDetils /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        {path : 'cart' , element : <Cart/>}
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App



// BrowserRouter : this is the simple why with JSX Concept 
// createBrowserRouter : this is the router using the object not jsx ,  work with  : loader , action ,  errorElement , RouterProvider this all thign not supported by the Browser , this all thigs are used in the latrge scalable web-app
