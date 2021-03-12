import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  const url =
    "https://raw.githubusercontent.com/IrvHenri/pic-mrkt-imgs/main/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
