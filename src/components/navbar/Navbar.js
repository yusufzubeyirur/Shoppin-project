import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>LikeMuClothes</h2>
      </Link>
      <ul className="navbar-ul">
        <li>Kadın</li>
        <li>Erkek</li>
        <li>Giyim</li>
        <li>Markalar</li>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Siparişler</li>
        </Link>
        <button className="nav-btn">Merhaba, Namık</button>
      </ul>
    </div>
  );
};

export default Navbar;
