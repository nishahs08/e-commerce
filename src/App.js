import logo from './logo.svg';
import './App.css';
import { commerce } from './lib/commerce';
import { Products } from './Components/Products/Products';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { SettingsApplicationsRounded } from '@material-ui/icons';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})
  const getProducts = async () => {
    try {
      const { data } = await commerce.products.list();
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

  const handleAddtoCart = async(productId,quantity)=>{
    try {
      const item = await commerce.cart.add(productId,quantity);
      console.log(item.cart)
      setCart(item.cart)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProducts();
    getCart()
  }, [])

  return (
    <>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddtoCart}/>
    </>
  );
}

export default App;
