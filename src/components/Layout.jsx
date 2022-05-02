import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from './Footer'
import Header from "./Header";


const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/catalog">Products</Link>
        <Link to="/catalog">Accessory</Link>
        <Link to="/contacts">Contacts</Link>
      </header>
      <div className="main">
      <Header />
      <Outlet />
      </div>
     
      <Footer />
    </div>
  );
};

export { Layout };
