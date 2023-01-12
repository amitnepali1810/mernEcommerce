import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import React, { useEffect } from 'react';
import Home from './component/Home/Home';
import Header from './component/layout/Header/Header';
import Footer from './component/layout/Footer/Footer';
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";

const App = () => {


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/product/:id' element={<ProductDetails/>} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/products/:keyword' element={<Products />} />
          <Route exact path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
