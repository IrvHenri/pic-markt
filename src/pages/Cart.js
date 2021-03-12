import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
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
      setTimeout(() => {
        console.log("Order placed!");
        setButtonText("Place Order");
      }, 3000);
    } else return;
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: ${priceTotal} </p>
      <div className="order-button">
        <button onClick={() => submitOrder()}>{buttonText}</button>
      </div>
    </main>
  );
}

export default Cart;
