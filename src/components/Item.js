import React from "react";
import ItemCount from "./ItemCount";
import data from "./Data/productos.json";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <div className="card-body">
        {data.map((producto) => (
          <div key={producto.id}>
            <p className="card-text">{producto.imagen}</p>
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text">${producto.precio}</p>
            <p className="card-text">Stock: {producto.stock}</p>
            <ItemCount stock={producto.stock} initial={0} />
            <Link to={`/${producto.id}`} className="btn btn-primary">
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
