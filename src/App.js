import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) =>{
    const newCart = [...cart, product];
    setCart(newCart);
  }
  
  return (
    <div>
      <h1 className="title">Lucky Watch Shop</h1>
      <div className="container">
      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart}></Product>
        ))}
      </div>
      <Cart data={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
