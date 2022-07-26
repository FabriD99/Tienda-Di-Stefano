import React, { useState } from "react";

const ItemCount = (props) => {
  const { stock, initial, onAddToCart } = props;
  const [stockCount, setStockCount] = useState(stock);
  const [count, setCount] = useState(initial);
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    setStockCount(stockCount - 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
    setStockCount(stockCount + 1);
  };

  const addToCart = () => {
    if (count >= 1) {
      setStockCount(stockCount - count);
      onAddToCart(count);
      setCartCount(cartCount + count);
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleRemove}
          disabled={count <= 0}
          style={{ marginRight: "10px" }}
        >
          -
        </button>
        <span style={{ fontSize: "1.5rem" }}>{count}</span>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleAdd}
          disabled={stock <= count}
          style={{ marginLeft: "10px" }}
        >
          +
        </button>
      </div>
      <div style={{ margin: "10px" }}>
        <button
          className="btn btn-dark"
          onClick={() => {
            addToCart();
            handleAdd();
          }}
        >
          Agregar al carrito <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
