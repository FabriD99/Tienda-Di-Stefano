import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="./Logo.png" alt="Logo" width="70" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
              <Link className="nav-link" to="/cart">
                <CartWidget />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
