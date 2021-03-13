import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  // const [hovered, setHovered] = useState(false)
  const [hovered, leave, enter] = useHover();
  const { removeFromCart } = useContext(Context);

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => enter()}
        onMouseLeave={() => leave()}
      ></i>

      <img src={item.url} width="130px" />
      <div className="cart-item-details">
        <p>
          "{item.title}" by {item.artist}
        </p>
        <p>${item.price}</p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
