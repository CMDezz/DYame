import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Poster from "./Component/Poster/Poster";
import Slider from "./Component/Slider/Slider";
import ProductList from "./Component/ProductList/ProductList";
import Discount from "./Component/Discount/Discount";
import Footer from "./Component/Footer/Footer";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage"
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ListProductsAlbumPage from "./Pages/ListProductsAlbumPage"
import ListProductsTypePage from "./Pages/ListProductsTypePage"

import Cart from "./Component/Cart/Cart";
import PMaterial from "./Component/Purchase/PMaterial"
class App extends Component {
  render() {

    return (
      <Router>
        <Navbar></Navbar>

        <Route path="/products/album/:album" component={ListProductsAlbumPage}></Route>
        <Route path="/products/type/:type" component={ListProductsTypePage}></Route>
        <Route path="/products/detail/:id" component={ProductDetailsPage}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/shipping" exact component={PMaterial}></Route>
        <Route path="/search/:keyWord" component={SearchPage}></Route>
        <Route path="/" exact={true} component={HomePage}></Route>
        <Footer></Footer>

      </Router>

    );
  }
}

export default App;
