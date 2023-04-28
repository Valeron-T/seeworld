import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from '../components/Footer';


function Layout() {
  const location = useLocation();
  return (
    <div>
        <Outlet key={location.pathname}/>
        {/* Footer  */}
        <Footer/>
    </div>
  )
}

export default Layout