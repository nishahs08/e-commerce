import logo from './logo.svg';
import './App.css';
import { commerce } from './lib/commerce';
import { Products } from './Components/Products/Products';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SettingsApplicationsRounded } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Cart } from './Components/Cart/Cart';
import {Checkout} from './Components/Checkout/Checkout';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [order, setOrder] = useState({});
  
  const getProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      console.log(data)
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }
  const getCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddtoCart = async (productId, quantity) => {
    try {
      const item = await commerce.cart.add(productId, quantity);
      console.log(item.cart)
      setCart(item.cart)
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, quantity);
      console.log(cart)
      setCart(cart)
    } catch (err) {
      console.log(err)
    }
  }

  const handleRemoveFromCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      console.log(cart)
      setCart(cart)
    } catch (err) {
      console.log(err)
    }
  }

  const handleEmptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      console.log(cart)
      setCart(cart)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProducts();
    getCart()
  }, [])

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/' render={(props) => <Products products={products} onAddToCart={handleAddtoCart} />} />
          <Route exact path='/cart' render={(props) => <Cart cart={cart}
            onUpdateCartQty={handleUpdateCartQty}
           onRemoveFromCart={handleRemoveFromCart}
           onEmptyCart={handleEmptyCart} />} />
           <Route exact path='/checkout' component={(props)=><Checkout {...props} cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}  error={errorMessage}/>} />
        </Switch>
      </Router>


    </>
  );
}

export default App; 
