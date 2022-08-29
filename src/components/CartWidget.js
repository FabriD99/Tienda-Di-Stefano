import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartData } = useContext(CartContext);
  let totalCart = 0;
  cartData.map((item) => {
    const subtotalItem = item.quantity;
    totalCart = totalCart + subtotalItem;
    return totalCart;
  });


  return (
    <div className="cartWidget">
      <i className="bi bi-cart" />
      <span className="badge rounded-pill bg-dark">{totalCart}</span>
    </div>
  );
};

export default CartWidget;
