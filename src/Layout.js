import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./pages/Navigtion";
import Footer from './Footer';
const Layout = () => {
  return (  
     <>
        <Navbar />
        <Outlet />
        <Footer />
     </>
  );
};

export default Layout;