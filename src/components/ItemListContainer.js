import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [resultado, setResultado] = useState([]);
  const data = "./Data/productos.json";

  useEffect(() => {
    const productCarrito = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
        rej("¡Error! No se pudieron cargar los productos");
      }, 2000);
    });

    productCarrito
      .then((result) => {
        setResultado(result);
      })
      .finally(() => {
        setLoading(false);
      });

  });
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4>Cargando productos...</h4>
        </div>
      ) : (
        <ItemList productos={resultado} />
      )}
    </>
  );
};

export default ItemListContainer;
