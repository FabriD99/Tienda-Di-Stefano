import React from "react";
import ItemListContainer from "./ItemListContainer";

const Inicio = () => {
  return (
    <div>
      <h1>
        Bienvenido a <b>Black Burger</b>
      </h1>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Inicio;
