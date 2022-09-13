import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DB } from "./Data/DataFirebase";
import { collection, getDocs } from "firebase/firestore";

const Categories = () => {
  const [product, setProduct] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    const itemsCollection = collection(DB, "items");
    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot) {
        setProduct(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
      return product;
    });
  }, [product]);
  console.log("product =>", product);

  const productByCategory = () => {
    if (product.category === category) {
        return product;
    }
    console.log('productByCategory =>', product)
  };
  productByCategory()

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
            category === "burger" ? (
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
            category === "extra" ? (
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

export default Categories;
