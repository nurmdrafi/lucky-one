import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleItem, setSingleItem] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    if (cart.length === 4) {
      return;
    }
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const chooseSingleItem = () => {
    const random = Math.floor(Math.random() * 4);
    setSingleItem(cart[random]);
  };
  const chooseAgain = () => {
    setCart([]);
  };
console.log(singleItem);
  return (
    <div>
      <h1 className="title">Lucky Watch Shop</h1>
      <div className="container">
        <div className="card-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <Cart
          data={cart}
          chooseAgain={chooseAgain}
          chooseSingleItem={chooseSingleItem}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
