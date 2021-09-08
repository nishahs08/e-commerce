import logo from './logo.svg';
import './App.css';
import { commerce } from './lib/commerce';
import { Products } from './Components/Products/Products';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async()=>{
      try{
      const {data} = await commerce.products.list();
      console.log("data",data);
      setProducts(data)
      }catch(err){
        console.log("error",err)
      }
    }
    getProducts()
  },[])
  return (
    <>
      <Navbar />
      <Products products={products}/>
    </>
  );
}

export default App;
