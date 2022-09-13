import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";

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
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  Todos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/categories/burger">
                  Burgers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/categories/extra">
                  Extras
                </NavDropdown.Item>
              </NavDropdown>
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
