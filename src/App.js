import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Inicio from "./components/Inicio";
import Cart from "./components/Cart.js";
import CartContext from "./context/CartContext";

function App() {
  const cartCount = 0;
  return (
    <div className="App">
      <CartContext.Provider value={cartCount}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<ItemListContainer />} />
            <Route path="/:userId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
