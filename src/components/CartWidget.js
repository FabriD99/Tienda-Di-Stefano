import React from "react";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <i className="bi bi-cart" />
      <span className="badge rounded-pill bg-dark">0</span>
    </div>
  );
};

export default CartWidget;
