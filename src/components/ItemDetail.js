import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { DB } from "./Data/DataFirebase";
import { collection, getDocs } from "firebase/firestore";

const ItemDetail = () => {
  let { productId } = useParams();

  const [addedToCart, setAddedToCart] = useState(false);
  const [product, setProduct] = useState([]);

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

  useEffect(() => {
    const itemsCollection = collection(DB, "items");
    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot) {
        setProduct(
          snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .find((doc) => {
              return doc.id === productId;
            })
        );
      }
      return product;
    });
  }, []);

  const { id, name, image, description, price } = product;

  return (
    <div>
      <img
        src={product.image}
        alt={`Imagen product ${product.id}`}
        width="500px"
        style={{ borderRadius: "10px" }}
      />
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">${product.price}</p>
      <p className="card-text">Stock: {product.stock}</p>
      {addedToCart ? (
        <div className="bntAddedContainer">
          <h6>Agregaste el product al carrito</h6>
          <Link to="/cart">
            <button className="btn btn-dark" style={{ margin: "0 10px" }}>
              Ir al carrito
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-dark" style={{ margin: "0 10px" }}>
              Seguir Comprando
            </button>
          </Link>
        </div>
      ) : (
        <ItemCount stock={product.stock} initial={0} onAddToCart={onAddItems} />
      )}
    </div>
  );
};

export default ItemDetail;
