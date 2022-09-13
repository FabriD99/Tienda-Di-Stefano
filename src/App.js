import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Inicio from "./components/Inicio";
import Cart from "./components/Cart.js";
import CartCustomContext from "./context/CartContext";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <CartCustomContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories/:category" element={<Categories />} />

          </Routes>
        </Router>
      </CartCustomContext>
    </div>
  );
}

export default App;
