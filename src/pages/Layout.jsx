import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";


function Layout() {
  const location = useLocation();
  return (
    <div>
        <Outlet key={location.pathname}/>
    </div>
  )
}

export default Layout