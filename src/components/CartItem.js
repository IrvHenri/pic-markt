import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../Context";
function CartItem({ item }) {
  const [hovered, onMouseEnter, onMouseLeave] = useHover();
  const { removeFromCart } = useContext(Context);
  const trashFill = hovered ? "fill" : "line";
  return (
    <div className="cart-item">
      <i
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        className={`ri-delete-bin-${trashFill}`}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>{item.title}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default CartItem;
