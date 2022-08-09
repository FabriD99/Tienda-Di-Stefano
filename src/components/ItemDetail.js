import React from "react";
import data from "./Data/productos.json";
const ItemDetail = () => {
  return (
    <div>
      {data.map((producto) => (
        <div key={producto.id}>
          <p>{producto.imagen}</p>
          <h5>{producto.name}</h5>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <p>Stock: {producto.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;
