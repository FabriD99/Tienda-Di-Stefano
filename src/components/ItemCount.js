import React, { useState } from "react";

const ItemCount = (props) => {
  const { stock, initial } = props;
  const [count, setCount] = useState(initial);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
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
          className="btn btn-outline-primary"
          onClick={handleRemove}
          disabled={count <= 0}
          style={{ marginRight: "10px" }}
        >
          -
        </button>
        <span style={{ fontSize: "1.5rem" }}>{count}</span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleAdd}
          disabled={stock <= count}
          style={{ marginLeft: "10px" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
