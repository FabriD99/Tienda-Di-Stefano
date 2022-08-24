import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    setCart(
      cart.find((itemInCart) => itemInCart.id === item.id)
        ? cart.map((itemInCart) => {
            if (itemInCart.id === item.id) {
              return {
                ...itemInCart,
                quantity: itemInCart.quantity + item.quantity,
              };
            }
            return itemInCart;
          })
        : [...cart, item]
    );
  };
  return (
    <CartContext.Provider value={{ addCartItem, cartData: cart }}>
      {children}
    </CartContext.Provider>
  );
}
