import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
// import { Layout } from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header />
    <div className="container">
      <div className="main">
      <Link to="/">Home</Link>
        <Link to="/catalog/:slug">Product</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/catalog/:slug">Product</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </header> */}
      <Routes>
          {/* <Route path="/" element={ <Layout /> }>
              <Route index element={ <Home /> } />
              <Route path="/catalog/:slug" element={ <Product />} />
              <Route path="/catalog" element={ <Catalog /> } />
              <Route path="/cart" element={ <Cart /> } />
          </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:slug" element={<Product />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
