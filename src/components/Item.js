import React from "react";
import data from "./Data/productos.json";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {data.map((producto) => (
        <div
          className="col"
          key={producto.id}
          style={{
            display: "flex",
            alignItems: "center",
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
          <p className="card-text" style={{ margin: "0" }}>
            ${producto.price}
          </p>
          <p className="card-text" style={{ margin: "0" }}>
            Stock: {producto.stock}
          </p>
          <Link to={`/${producto.id}`} className="btn btn-outline-dark">
            Ver más
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Item;
