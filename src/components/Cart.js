import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import swal from "sweetalert";

export default function Cart() {
  const { cartData, removeFromCart, removeAll } = useContext(CartContext);
  let total = 0;

  const finalizarCompra = () => {
    swal({
      title: "¡Gracias por tu compra!",
      icon: "success",
    });
    removeAll();
  };

  return cartData.length === 0 ? (
    <div>
      <h3>Tu carrito está vacio</h3>
      <Link to="/menu">
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
                  src={"./burger.jpg"}
                  style={{ width: "150px", margin: "0 20px" }}
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
