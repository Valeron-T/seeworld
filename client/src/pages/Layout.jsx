import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Layout() {
  const location = useLocation();
  return (
    <div className=''>
      <Outlet key={location.pathname} />
      {/* Footer  */}
      <Footer />
    </div>
  )
}

export default Layout