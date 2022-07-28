import React from "react";

const ItemListContainer = (props) => {
  const { greeting } = props;
  return (
    <div>
      <h1>Catalogo</h1>
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
