import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";
import { Context } from "../Context";
function Image({ className, img }) {
  const [hovered, leave, enter] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );
  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  function cartIcon() {
    const addedToCard = cartItems.find((item) => item.id === img.id);
    if (addedToCard) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => enter()}
      onMouseLeave={() => leave()}
    >
      <img src={img.url} alt="random" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
