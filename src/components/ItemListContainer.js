import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        <ItemList />
      )}
    </>
  );
};

export default ItemListContainer;
