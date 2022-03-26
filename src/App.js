import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleItem, setSingleItem] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  // Cart EventHandlers
  const chooseSingleItem = () => {
    if (cart.length > 0) {
      const length = cart.length;
      const random = Math.floor(Math.random() * length);
      setSingleItem(cart[random]);
      if (singleItem) {
        openModal();
      }
    }
  };
  const chooseAgain = () => {
    setCart([]);
  };

  // Modal EventHandlers
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <button className="close-btn" onClick={closeModal}>X</button>
        <div className="modal-container">
          <div className="image-container">
            <img src={singleItem.image} alt="" />
          </div>
          <div className="details">
            <h2>Name: {singleItem.name}</h2>
            <h3>Brand: {singleItem.brand}</h3>
            <h3>Price: ${singleItem.price}</h3>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
