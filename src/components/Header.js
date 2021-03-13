import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
function Header() {
  const { cartItems } = useContext(Context);
  return (
    <header>
      <Link to="/">
        <span className="logo-name">
          <h2>Pik Markt</h2> <i class="ri-store-line"></i>
        </span>
      </Link>

      <nav className="nav-container">
        <Link className="nav-link" to="/artists">
          <h2>Artists</h2>
        </Link>
        <Link to="/cart">
          <i
            className={`ri-shopping-cart-${
              cartItems.length > 0 ? "fill" : "line"
            } ri-fw ri-2x`}
          ></i>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
