import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const [buttonDisable, setButtonDisable] = useState(false);
  const { cartItems, clearCart } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const priceTotal = cartItems
    .map((item) => Number(item.price))
    .reduce(function (acc, price) {
      return acc + price;
    }, 0);

  function submitOrder() {
    if (cartItems.length > 0) {
      setButtonText("Ordering...");
      setButtonDisable(true);
      setTimeout(() => {
        console.log("Order placed!");
        setButtonText("Place Order");
        clearCart();
      }, 3000);
    } else return;
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: ${priceTotal} </p>

      {cartItems.length > 0 ? (
        <div className="order-button">
          <button disabled={buttonDisable} onClick={() => submitOrder()}>
            {buttonText}
          </button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default Cart;
