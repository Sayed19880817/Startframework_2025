import React from 'react'
import Navbar from '../Component/NavBar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
