import React from "react";
import ItemCount from "./ItemCount";

const Item = (props) => {
  // TODAVIA NO TERMINO ESTE COMPONENTE
  const { id, nombre, descripcion, imagen, precio, stock } = props;

  const productos = "./Data/productos.json";
  fetch(productos)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          src={productos.imagen}
          alt={productos.imagen}
          className="card-img-top"
        />
        <h5 className="card-title"> {nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{precio}</p>
        <ItemCount stock={stock} initial={0} />
        <p className="card-text">Stock disponible {stock}</p>
        <div style={{ marginTop: "10px" }}>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
