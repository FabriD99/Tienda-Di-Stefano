import React from "react";
import cartContext from "../hooks/cartContext";

const CartWidget = () => {
  const cartCounter = cartContext();
  
  return (
    <div className="cartWidget">
      <i className="bi bi-cart" />
      <span className="badge rounded-pill bg-dark">{cartCounter}</span>
    </div>
  );
};

export default CartWidget;
