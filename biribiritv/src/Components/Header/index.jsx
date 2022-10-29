import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/HeaderLogo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <nav>
        <Link to="/">
          Home{" "}
        </Link>
        <Link to="/programas">
          Programas{" "}
        </Link>
        <Link to="/contacto">
          Contacto{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
