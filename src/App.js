import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1 className="title">Lucky Watch Shop</h1>
      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

export default App;
