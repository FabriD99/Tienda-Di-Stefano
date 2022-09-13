import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import swal from "sweetalert";
import { DB } from "./Data/DataFirebase";
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";

export default function Cart() {
  const { cartData, removeFromCart, removeAll } = useContext(CartContext);
  let total = 0;

  const createOrder = () => {
    const itemsForDB = cartData.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
    }));
    let order = {
      buyer: {
        name: "Pepe",
        phone: "12432521",
        email: "pepe@pepe.com",
      },
      items: itemsForDB,
      total: total,
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(DB, "order"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) =>
        swal(
          `Su pedido fue realizado correctamente. \n\nNumero de pedido: ${result.id}`
        )
      )
      .catch((err) => console.log(err));

    createOrderInFirestore()
      .then(
        cartData.forEach(async (item) => {
          const itemRef = doc(DB, "items", item.id);
          await updateDoc(itemRef, {
            stock: increment(-item.quantity),
          });
        })
      )
      .catch((err) => console.log(err));
  };

  const finalizarCompra = () => {
    swal({
      title: "¡Gracias por tu compra!",
      icon: "success",
    });
    createOrder();
    removeAll();
  };

  return cartData.length === 0 ? (
    <div>
      <h3>Tu carrito está vacio</h3>
      <Link to="/">
        <button className="btn btn-dark" style={{ margin: "0 10px" }}>
          Ir a comprar
        </button>
      </Link>
    </div>
  ) : (
    <div className="cart">
      <h1>Tu carrito:</h1>
      {cartData.map((item) => {
        const subtotalItem = item.quantity * item.price;
        total = total + subtotalItem;
        return (
          <div key={item.id}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <img
                  src={item.image}
                  style={{ width: "100px", margin: "0 20px" }}
                  alt="Imagen producto"
                ></img>
                {`${item.name} - x${item.quantity} = $${subtotalItem}`}
                <button
                  id={item.id}
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger"
                  style={{ margin: "0 10px" }}
                >
                  X
                </button>
              </li>
            </ul>
          </div>
        );
      })}
      <>------------------------------------------------</>
      <h3>Total = {total}</h3>
      <div className="bottomButtons">
        <button
          className="btn btn-outline-dark"
          style={{ margin: "10px" }}
          onClick={removeAll}
        >
          Vaciar carrito
        </button>
        <button
          className="btn btn-dark"
          onClick={finalizarCompra}
          style={{ margin: "10px" }}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
