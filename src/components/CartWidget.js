import React from "react";

const CartWidget = (cartCount) => {
  return (
    <div className="cartWidget">
      <i className="bi bi-cart" />
      <span className="badge rounded-pill bg-dark">0</span>
    </div>
  );
};

export default CartWidget;
