import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { DB } from "./Data/DataFirebase";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

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
  },[]);

  return (
    <>
      <ItemList product={product}/>
    </>
  );
};

export default ItemListContainer;
