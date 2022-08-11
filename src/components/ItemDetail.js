import React from "react";
import { useParams } from "react-router-dom";
import data from "./Data/productos.json";
import ItemCount from "./ItemCount";
const ItemDetail = () => {
  let { userId } = useParams();
  const producto = data.find((producto) => producto.id === userId);
  return (
    <div>
      <img
        src={`./${producto.imagen}`}
        alt={`Imagen producto ${producto.id}`}
        width="500px"
        style={{ borderRadius: "10px" }}
      />
      <h5 className="card-title">{producto.name}</h5>
      <p className="card-text">{producto.descripcion}</p>
      <p className="card-text">${producto.precio}</p>
      <p className="card-text">Stock: {producto.stock}</p>
      <ItemCount stock={producto.stock} initial={0} />
      <button className="btn btn-primary">
        Agregar al carrito <i className="fas fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default ItemDetail;
