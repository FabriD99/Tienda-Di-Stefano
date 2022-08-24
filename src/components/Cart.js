import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartData } = useContext(CartContext);

  return (
    <div className="cart">
      Tu carrito:
      {cartData.map((item) => {
        return (
          <div key={item.id}>{`Producto ${item.id} - x${item.quantity}`}</div>
        );
      })}
    </div>
  );
}
