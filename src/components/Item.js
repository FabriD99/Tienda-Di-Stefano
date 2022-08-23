import React from "react";
import ItemCount from "./ItemCount";
import data from "./Data/productos.json";
import { Link } from "react-router-dom";

const Item = () => {

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {data.map((producto) => (
        <div
          className="col"
          key={producto.id}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px",
            gap: "20px",
          }}
        >
          <img
            src={`./${producto.image}`}
            alt={`Imagen producto ${producto.id}`}
            width="200px"
            style={{ borderRadius: "10px", margin: "10px" }}
          />
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">${producto.price}</p>
          <p className="card-text">Stock: {producto.stock}</p>
          <ItemCount stock={producto.stock} initial={0} />
          <Link to={`/${producto.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Item;
