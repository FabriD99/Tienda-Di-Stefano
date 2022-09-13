import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  const { product } = props;
  return (
    <div className="container">
      <Item product={product} />
    </div>
  );
};
export default ItemList;
