import React from "react";
import { Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Page404 } from "./pages/Page404";
// import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { Layout } from "./components/Layout";


const App = () => {
  return (
    <>
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/catalog">Products</Link>
        <Link to="/catalog">Accessory</Link>
        <Link to="/contacts">Contacts</Link>
      </header> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Product />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
