import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { product } = props;

  return (
    <>
      {product.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4>Cargando...</h4>
        </div>
      ) : (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <>------------------------------------------------</>
          <h3>Burgers</h3>
          <>------------------------------------------------</>
          {product.map((producto) =>
            producto.category === "burger" ? (
              <div
                className="col"
                key={producto.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={producto.image}
                  alt="Imagen producto"
                  width="200px"
                  style={{ borderRadius: "10px", margin: "10px" }}
                />
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text" style={{ margin: "0" }}>
                  ${producto.price}
                </p>
                <Link to={`/${producto.id}`} className="btn btn-outline-dark">
                  Ver más
                </Link>
              </div>
            ) : null
          )}
          <>------------------------------------------------</>
          <h3>Extras</h3>
          <>------------------------------------------------</>
          {product.map((producto) =>
            producto.category === "extra" ? (
              <div
                className="col"
                key={producto.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={producto.image}
                  alt="Imagen producto"
                  width="200px"
                  style={{ borderRadius: "10px", margin: "10px" }}
                />
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text" style={{ margin: "0" }}>
                  ${producto.price}
                </p>
                <Link to={`/${producto.id}`} className="btn btn-outline-dark">
                  Ver más
                </Link>
              </div>
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default Item;
