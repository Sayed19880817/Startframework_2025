import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Home from './Peges/Home';
import About from './Peges/About';
import Contact from './Peges/Contact';
import Portfolio from './Peges/Portfolio';
import Layout from './Peges/Layout';
import PageNotFound from './Component/PageNotFound';


function App() {
const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App
