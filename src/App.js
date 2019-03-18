import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/products/prodlistWrapper'
import Header from './components/header-footer/header'
import Footer from './components/header-footer/footer'
import Home from './components/home'
import Cart from './components/cart'
import { ErrorBoundary } from './components/misc/error'
import Navbar from './components/navBar';
import { productProvider } from './components/providers/productProvider'
import Product from './components/products/prodlistWrapper'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <ErrorBoundary>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Switch>
            <Route exact path='/cart' component={Cart} />
          </Switch>
          <Switch>
            <Route exact path='/products' component={Product} />
          </Switch>
        </ErrorBoundary>
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;
