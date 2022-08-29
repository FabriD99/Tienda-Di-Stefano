import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./Data/productos.json";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = () => {
  let { userId } = useParams();

  const [addedToCart, setAddedToCart] = useState(false);

  const { addCartItem } = useContext(CartContext);

  const onAddItems = (quantityToAdd) => {
    addCartItem({
      id,
      quantity: quantityToAdd,
      name,
      image,
      description,
      price,
    });
    setAddedToCart(true);
  };

  const producto = data.find((producto) => producto.id === userId);
  const { id, name, image, description, price } = producto;

  return (
    <div>
      <img
        src={`./${producto.image}`}
        alt={`Imagen producto ${producto.id}`}
        width="500px"
        style={{ borderRadius: "10px" }}
      />
      <h5 className="card-title">{producto.name}</h5>
      <p className="card-text">{producto.description}</p>
      <p className="card-text">${producto.price}</p>
      <p className="card-text">Stock: {producto.stock}</p>
      {addedToCart ? (
        <div className="bntAddedContainer">
          <h6>Agregaste el producto al carrito</h6>
          <Link to="/cart">
            <button className="btn btn-dark" style={{ margin: "0 10px" }}>
              Ir al carrito
            </button>
          </Link>
          <Link to="/menu">
            <button className="btn btn-dark" style={{ margin: "0 10px" }}>
              Seguir Comprando
            </button>
          </Link>
        </div>
      ) : (
        <ItemCount
          stock={producto.stock}
          initial={0}
          onAddToCart={onAddItems}
        />
      )}
    </div>
  );
};

export default ItemDetail;
