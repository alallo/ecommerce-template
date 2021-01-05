import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProductList from './components/shop/productList';
import Delivery from './components/shop/delivery';
import ProductDetails from "./components/shop/productDetails";
import Checkout from "./components/checkout/checkout";
import About from "./components/about"
import {
  Switch,
  Route
} from "react-router-dom";
import NotFoundError from './components/shared/notFoundError';

function App() {
  return (  
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/">
              <ProductList/>
              <Delivery/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/checkout" component={Checkout} />
          <Route path="/product-details/:productId" component={ProductDetails} />
          <Route path="/product-details" component={ProductDetails} />
          <Route component={NotFoundError} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
